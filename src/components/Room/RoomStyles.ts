import styled from "styled-components";

const Container = styled.header`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 1rem;
	flex: 1;
`;

const Main = styled.main`
	width: 100%;
	max-width: 1200px;
	height: 100%;
	box-sizing: border-box;
	display: flex;
	//justify-content: space-between;
	//flex-direction: row;
	background-color: #363636;
	border-radius: 5px;

	@media (max-width: 500px) {
		padding: 1rem;
	}
`;

export { Container, Main };
