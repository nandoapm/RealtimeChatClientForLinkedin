import { ChangeEvent, useState } from "react";
import { Container, Main } from "./RoomStyles";
import { Button } from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";

const Room = () => {
	const [messages, setMessages] = useState<string[]>([]);
	const [message, setMessage] = useState<string>("");

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setMessage(event.target.value);
	};

	const submitMessage = () => {
		setMessages([...messages, message]);
	};

	return (
		<Container>
			<Main>
				<ul>
					{messages.map((message, index) => (
						<li key={index}>{message}</li>
					))}
				</ul>
			</Main>
			<input onChange={handleChange} />
			<Button onClick={submitMessage}>
				<TelegramIcon style={{ marginRight: "8px" }} />
			</Button>
		</Container>
	);
};

export { Room };
