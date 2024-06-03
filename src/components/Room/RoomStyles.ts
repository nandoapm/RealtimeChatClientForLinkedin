import styled from "styled-components";

const Container = styled.header`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 1rem;
	flex: 1;
	background-color: yellow;
`;

const Main = styled.main`
	width: 100%;
	max-width: 1200px;
	height: 100% !important;
	box-sizing: border-box;
	display: flex;
	background: #363636;
	border-radius: 5px;

	@media (max-width: 500px) {
		padding: 1rem;
	}
`;

const Messages = styled.ul`
	list-style: none;
`

const Message = styled.li`
	background: linear-gradient(135deg, #d3d, #a777e3);
	border-radius: 10px 10px 10px 0;
	margin: 0.25rem;
	padding: 0.5rem;
	width: 100%;
	color: #fefefe;
`

export { Container, Main, Messages, Message };
