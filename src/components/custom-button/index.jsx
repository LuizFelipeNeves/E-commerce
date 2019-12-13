import React from 'react'

import Button from './styled'

const CustomButton = ({
	children,
	isGoogleSignIn,
	inverted,
	...otherProps
}) => (
	<Button
		className={`${inverted ? 'inverted' : ''} ${
			isGoogleSignIn ? 'google-sign-in' : ''
		} `}
		{...otherProps}
	>
		{children}
	</Button>
)

export default CustomButton
