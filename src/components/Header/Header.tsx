import { Box, Typography } from "@mui/material";
import { Container, BoxHeader } from "./HeaderStyles";
import ThreePIcon from "@mui/icons-material/ThreeP";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Header = () => {
	return (
		<Container>
			<BoxHeader>
				<Box display={"flex"} flexDirection={"row"} gap={1}>
					<ThreePIcon />
					<Typography>RealTime Chat</Typography>
				</Box>
				<Box>
					<NotificationsIcon />
				</Box>
			</BoxHeader>
		</Container>
	);
};

export { Header };
