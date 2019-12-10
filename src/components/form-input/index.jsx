import React from 'react'

import * as Styled from './styled'

const FormInput = ({ handleChange, label, ...otherProps }) => (
	<Styled.Container>
		<Styled.Input onChange={handleChange} {...otherProps} />
		{label ? (
			<Styled.Label className={`${otherProps.value.length ? 'shrink' : ''}`}>
				{label}
			</Styled.Label>
		) : null}
	</Styled.Container>
)

export default FormInput
