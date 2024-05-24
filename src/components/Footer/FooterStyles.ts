import styled from "styled-components";

const Container = styled.footer`
	//background-color: #fd3d3d;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	color: #ffffff;
	padding: 1rem;
`;

const BoxFooter = styled.div`
	width: 100%;
	max-width: 1200px;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	border-top: 2.5px solid #363636;
	color: #363636;
	padding: 1rem 0 0 0;

	@media (max-width: 500px) {
		padding: 1rem;
		flex-direction: column;
		text-align: center;
		align-items: center;
	}
`;

export { Container, BoxFooter };
