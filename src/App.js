import { Link, Outlet } from "react-router-dom";
// import TestFireBase from "./components/TestFireBase";

const App = () => {
  return (
    <div className="container text-align-center">
      {/* <TestFireBase /> */}
      <nav>
        <ul className="nav">
          <li className="nav-item me-5">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item me-5">
            <Link to="Cart">Cart</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default App;
