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

export const addColletionAndDocuments = async (colletionKey, objectsToAdd) => {
	const colletionRef = firestore.collection(colletionKey)
	const batch = firestore.batch()
	objectsToAdd.forEach(obj => {
		const newDocRef = colletionRef.doc()
		batch.set(newDocRef, obj)
	})
	return await batch.commit()
}

export const convertCollectionsSnapshotToMap = (collections) => {
	const transformedCollections = collections.docs.map(doc => {
		const { title, items } = doc.data()
		return {
			routeName: encodeURI(title.toLowerCase()),
			id: doc.id,
			title,
			items
		}
	})

	return transformedCollections.reduce((accumulator, collection) => {
		accumulator[collection.title.toLowerCase()] = collection
		return accumulator
	}, {})
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
