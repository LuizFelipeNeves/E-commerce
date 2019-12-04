import styled from 'styled-components'

const Container = styled.div`
	height: 70px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 25px;
`

const Logo = styled.div`
	height: 100%;
	width: 70px;
	padding: 25px;
`

const Options = styled.div`
	width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

	.option {
		padding: 10px 15px;
	}
`

export { Container, Logo, Options }
