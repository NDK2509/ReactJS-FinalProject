import { Outlet } from "react-router-dom";
import Footer from "../components/Footer.Comp";
import Header from "../components/Header.Comp";

const MainLayout = () => {
	return (
		<>
			<div className="container my-2">
				<Header />
				<Outlet />
			</div>
			<Footer />
		</>
	);
};
export default MainLayout;