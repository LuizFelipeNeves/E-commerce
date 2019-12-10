import React, { useState } from 'react'
import * as Styled from './styled'

import FormInput from '../form-input'
import CustomButton from '../custom-button'

import { signInWithGoogle } from '../../firebase/firebase.utils'

const handleSubmit = (event) => {
	event.preventDefault()
	alert('Sign in')
}

export default () => {
	const [email, setemail] = useState('')
	const [password, setpassword] = useState('')
	return (
		<Styled.Container>
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					name="email"
					type="email"
					handleChange={(e) => setemail(e.target.value)}
					value={email}
					label="email"
					required
				/>
				<FormInput
					name="password"
					type="password"
					value={password}
					handleChange={(e) => setpassword(e.target.value)}
					label="password"
					required
				/>
				<Styled.Buttons>
					<CustomButton type="submit">Sign in</CustomButton>
					<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
						Sign in with Google
					</CustomButton>
				</Styled.Buttons>
			</form>
		</Styled.Container>
	)
}
