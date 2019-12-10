import React from 'react'

import Button from './styled'

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
	<Button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
		{children}
	</Button>
)

export default CustomButton
