import { Container } from "./App";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Login } from "./components/Login/Login";

const App = () => {
	return (
		<Container>
			<Header />
			<Login />
			<Footer />
		</Container>
	);
};

export default App;
