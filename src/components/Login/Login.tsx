import { useState } from "react";
import { Button, Container, Form, Input, Main, Tab, Tabs } from "./LoginStyles";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TelegramIcon from "@mui/icons-material/Telegram";
import BackgroundImage from "./../../assets/messages-bg.svg";
import { Hidden, Typography } from "@mui/material";

const Login = () => {
	const [activeTab, setActiveTab] = useState("login");

	const handleTabClick = (tab: string) => {
		setActiveTab(tab);
	};

	return (
		<Main>
			<Hidden mdDown>
				<img src={BackgroundImage} style={{ width: "500px" }} />
			</Hidden>
			<Container>
				<Tabs>
					<Tab active={activeTab === "login"} onClick={() => handleTabClick("login")}>
						<TelegramIcon style={{ marginRight: "8px" }} />
						<Typography fontSize={14}>Entrar</Typography>
					</Tab>
					<Tab active={activeTab === "register"} onClick={() => handleTabClick("register")}>
						<PersonAddIcon style={{ marginRight: "8px" }} />
						<Typography fontSize={14}>Novo chat</Typography>
					</Tab>
				</Tabs>

				{activeTab === "login" && (
					<Form active={activeTab === "login"}>
						<Input type="text" placeholder="ID" />
						<Button type="submit">Entrar</Button>
					</Form>
				)}

				{activeTab === "register" && (
					<Form active={activeTab === "register"}>
						<Input type="text" placeholder="Nome" />
						<Input type="email" placeholder="Email" />
						<Button type="submit">Criar</Button>
					</Form>
				)}
			</Container>
		</Main>
	);
};

export { Login };
