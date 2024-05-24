import { Box, Typography } from "@mui/material";
import { BoxFooter, Container } from "./FooterStyles";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
	return (
		<Container>
			<BoxFooter>
				<Box display={"flex"} flexDirection={"row"} gap={0.5}>
					&copy;
					<Typography fontSize={12}>
						Frontend Developer | Fernando Melo. Todos os direitos reservados.
					</Typography>
				</Box>
				<Box>
					<LinkedInIcon />
					<GitHubIcon />
					<EmailIcon />
					<WhatsAppIcon />
				</Box>
			</BoxFooter>
		</Container>
	);
};

export { Footer };
