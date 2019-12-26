import React from 'react'

import Button from './styled'

const CustomButton = ({ children, ...otherProps }) => (
	<Button {...otherProps}>{children}</Button>
)

export default CustomButton
