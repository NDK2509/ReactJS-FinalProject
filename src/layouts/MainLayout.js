import { Outlet } from "react-router-dom";
import Footer from "../components/Footer.comp";
import Header from "../components/Header.comp";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="my-2">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default MainLayout;
