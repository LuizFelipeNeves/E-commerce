import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import configenv from './config'

const { apiKey, appId, projectId, messagingSenderId, measurementId } = configenv

const config = {
	apiKey,
	appId,
	projectId,
	messagingSenderId,
	measurementId,
	authDomain: `${projectId}.firebaseapp.com`,
	databaseURL: `${projectId}.firebaseio.com`,
	storageBucket: `${projectId}.appspot.com`
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (userAuth) {
		const userRef = firestore.doc(`users/${userAuth.uid}`)
		const snapShop = await userRef.get()
		if (!snapShop.exists) {
			const { displayName, email } = userAuth
			const createdAt = new Date()

			try {
				await userRef.set({ displayName, email, createdAt, ...additionalData })
			} catch (error) {
				console.log('Error create user', error.message)
			}
		}
		return userRef
	}
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase