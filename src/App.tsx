import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppContainer } from "./App";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Login } from "./components/Login/Login";
import { Room } from "./components/Room/Room";

const App = () => {
	return (
		<AppContainer>
			<Header />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/room/:id" element={<Room />} />
				</Routes>
			</BrowserRouter>

			<Footer />
		</AppContainer>
	);
};

export default App;
