import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
	height: 70px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 25px;
`

const LogoLink = styled(Link)`
	height: 100%;
	width: 70px;
	padding: 25px;
`

const OptionsContainer = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`
const OptionsLink = styled(Link)`
	padding: 10px 15px;
	cursor: pointer;
`

export { Container, LogoLink, OptionsContainer, OptionsLink }
