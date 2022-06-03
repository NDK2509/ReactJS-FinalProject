import { Outlet } from "react-router-dom";
import Footer from "../components/Footer.Comp";
import Header from "../components/Header.Comp";

const MainLayout = () => {
	return (
		<>
			<Header />
			<main
				className="my-2"
				style={{
					display: "flex",
					justifyContent: "space-around",
					alignItems: "center"
				}}
			>
				<Outlet />
			</main>
			<Footer />
		</>
	);
};
export default MainLayout;
