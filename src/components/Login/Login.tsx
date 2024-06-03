import { ChangeEvent, FormEvent, useState } from "react";
import { Button, Container, Form, Image, Input, Main, Tab, Tabs } from "./LoginStyles";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TelegramIcon from "@mui/icons-material/Telegram";
import BackgroundImage from "./../../assets/messages-bg.svg";
import { Hidden, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const navigate = useNavigate();
	const [activeTab, setActiveTab] = useState<string>("login");
	const [formData, setFormData] = useState({ nome: "", email: "" });

	const handleTabClick = (tab: string) => {
		setActiveTab(tab);
	};

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
	};

	const handleAccess = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		navigate("/room/12345");
		console.log(formData);
	};

	return (
		<Main>
			<Hidden mdDown>
				<Image src={BackgroundImage} />
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
					<Form onSubmit={handleAccess} active={activeTab === "register"}>
						<Input
							type="text"
							name="nome"
							placeholder="Nome"
							value={formData.nome}
							onChange={handleInputChange}
						/>
						<Input
							type="email"
							name="email"
							placeholder="Email"
							value={formData.email}
							onChange={handleInputChange}
						/>
						<Button type="submit">Criar</Button>
					</Form>
				)}
			</Container>
		</Main>
	);
};

export { Login };
