import styled from "styled-components";

interface TabProps {
	active: boolean;
}

const Main = styled.main`
	flex: 1;
	display: flex;
	justify-content: center;
	flex-direction: row;
	align-items: center;
	padding: 16px;
`;

const Container = styled.div`
	width: 100%;
	max-width: 400px;
	box-sizing: border-box;
	border-radius: 5px;

	@media (max-width: 500px) {
		padding: 1rem;
	}
`;

const Tabs = styled.div`
	display: flex;
	margin: 0;
	border-radius: 5px 5px 0 0;
	background: #ffffff;
	width: 100%;
`;

const Tab = styled.button<TabProps>`
	flex: 1;
	padding: 10px 20px;
	margin: 0;
	cursor: pointer;
	background-color: ${(props) => (props.active ? "#363636" : "#ffffff")};
	color: ${(props) => (props.active ? "#ffffff" : "#363636")};
	border: none;
	box-shadow: none;
	border-radius: 5px 5px 0 0;
	outline: none;
	display: flex;
	justify-content: center;
	align-items: center;

	&:hover {
		background-color: ${(props) => (props.active ? "#363636" : "#f3f3f3")};
		color: ${(props) => (props.active ? "#ffffff" : "#363636")};
	}
`;

const Form = styled.form<TabProps>`
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	height: auto;
	background-color: ${(props) => (props.active ? "#363636" : "#d3d3d3")};
	border-radius: 0 0 5px 5px;
	box-sizing: border-box;
`;

const Input = styled.input`
	height: 35px;
	margin-bottom: 10px;
	border: 1px solid #cccccc;
	border-radius: 5px;
	outline: none;
	padding: 10px;
	box-sizing: border-box;
	width: 100%;
`;

const Button = styled.button`
	padding: 10px;
	background-color: #6d4aed;
	color: #d3d3d3;
	border: none;
	border-radius: 5px;
	box-shadow: none;
	cursor: pointer;
	width: 100%;

	&:hover {
		background-color: #633ee7;
	}
`;

export { Main, Container, Tabs, Tab, Form, Button, Input };
