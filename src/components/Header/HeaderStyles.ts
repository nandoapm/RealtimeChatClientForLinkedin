import styled from "styled-components";

const Container = styled.header`
	background-color: #6d4aed;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #ffffff;
	padding: 1rem;
`;

const BoxHeader = styled.div`
	width: 100%;
	max-width: 1200px;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	flex-direction: row;

	@media (max-width: 500px) {
		padding: 1rem;
	}
`;

export { Container, BoxHeader };
