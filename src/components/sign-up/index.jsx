import React, { useState } from 'react'
import * as Styled from './styled'

import FormInput from '../form-input'
import CustomButton from '../custom-button'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

export default () => {
	const [displaynName, setdisplayName] = useState('')
	const [email, setemail] = useState('')
	const [password, setpassword] = useState('')
	const [confirmpassword, setconfirmpassword] = useState('')

	const handleSubmit = async (event) => {
		event.preventDefault()
		if (password !== confirmpassword) return alert("Password don't match")

		try {
			const { user } = await auth.createUserWithEmailAndPassword(email, password)
			createUserProfileDocument(user, { displaynName })

			setdisplayName('')
			setemail('')
			setpassword('')
			setconfirmpassword('')
		} catch (error) {
			// TODO minlength
			alert(error.message)
		}
	}

	return (
		<Styled.Container>
			<h2>I do not have a account</h2>
			<span>Sign up with your email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					name="displayName"
					type="text"
					handleChange={(e) => setdisplayName(e.target.value)}
					value={displaynName}
					label="Display name"
					required
				/>
				<FormInput
					name="email"
					type="email"
					handleChange={(e) => setemail(e.target.value)}
					value={email}
					label="Email"
					required
				/>
				<FormInput
					name="password"
					type="password"
					value={password}
					handleChange={(e) => setpassword(e.target.value)}
					label="Password"
					required
				/>
				<FormInput
					name="confirmpassword"
					type="password"
					value={confirmpassword}
					handleChange={(e) => setconfirmpassword(e.target.value)}
					label="Confirm password"
					required
				/>
				<CustomButton type="submit">SIGN UP</CustomButton>
			</form>
		</Styled.Container>
	)
}
