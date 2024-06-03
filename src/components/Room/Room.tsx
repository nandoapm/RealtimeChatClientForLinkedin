import { ChangeEvent, KeyboardEvent, useState } from "react";
import { Container, Main, Message, Messages } from "./RoomStyles";
import { FormControl, IconButton, Input, InputAdornment } from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";

const Room = () => {
	const [messages, setMessages] = useState<string[]>([]);
	const [message, setMessage] = useState<string>("");

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setMessage(event.target.value);
	};

	const submitMessage = () => {
		if (!message) {
			throw new Error("Please enter a message");
		}

		setMessages([...messages, message]);

		setMessage("");
	};

	const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter") {
			event.preventDefault();
			submitMessage();
		}
	};

	return (
		<Container>
			<Main>
				<Messages>
					{messages.map((message, index) => (
						<Message key={index}>{message}</Message>
					))}
				</Messages>
			</Main>
			<FormControl fullWidth variant="standard">
				<Input
					type="text"
					onChange={handleChange}
					onKeyDown={handleKeyDown}
					value={message}
					endAdornment={
						<InputAdornment position="end">
							<IconButton aria-label="toggle send message" onClick={submitMessage}>
								<TelegramIcon />
							</IconButton>
						</InputAdornment>
					}
				/>
			</FormControl>
		</Container>
	);
};

export { Room };
