import { Link, useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";
import "./../assets/css/header.css";
import { useEffect } from "react";
import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";

const LOGIN_KEY = "ReactJSLogin"
const Left = () => {
  return (
    <div className="left-header d-flex justify-content-evenly align-items-center">
      <img
        className="img-thumbnail"
        src="/images/logo.png"
        style={{ width: "10rem" }}
        alt=""
      />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Du lịch</li>
          <li>Vận chuyển</li>
          <li>Tin tức</li>
          <li>Giảm giá</li>
        </ul>
      </nav>
    </div>
  );
};

const SearchBar = () => {
  //child compnents
  const SearchHint = ({ hint }) => {
    return (
      <li className="text-dark hint">
        <Link
          to={{ pathname: "/Search", search: `?searchKey=${hint}` }}
          onClick={() => setSearchKey("")}
        >
          <div>{hint}</div>
        </Link>
      </li>
    );
  };
  const Hints = ({ hintList }) => {
    return (
      <ul className="hints">
        {hintList.map((hint, index) => (
          <SearchHint key={index} hint={hint.name} />
        ))}
      </ul>
    );
  };
  //
  const navigate = useNavigate();
  const [searchKey, setSearchKey] = useState("");
  const provinces = useMemo(() => require("./../utils/vn-provinces.json"), []);
  const [hintList, setHintList] = useState([]);
  const searchHandler = (e) => {
    e.preventDefault();
    navigate({ pathname: "/Search", search: `?searchKey=${searchKey}` });
    setSearchKey("");
  };
  const inputChangeHandler = (e) => {
    const input = e.target.value;
    setHintList(
      input
        ? provinces.filter((province) =>
            province.name.toLowerCase().startsWith(input.toLowerCase())
          )
        : []
    );
    setSearchKey(input);
  };
  return (
    <div className="search-bar">
      <form onSubmit={searchHandler} autoComplete="off">
        <input
          type="text"
          name="searchKey"
          value={searchKey}
          autoComplete="off"
          placeholder="Nhập tên địa điểm..."
          onChange={inputChangeHandler}
        />
        <button
          type="submit"
          style={{ background: "transparent", border: "none" }}
        >
          <i className="fa fa-search ms-3" aria-hidden="true"></i>
        </button>
        {searchKey && <Hints hintList={hintList} />}
      </form>
    </div>
  );
};
const LoginButton = () => {
  const handleResponse = (response) => {
    const data = jwtDecode(response.credential);
    console.log(data);
    setIsLogedIn({ status: data.email_verified, data });
    Cookies.set(LOGIN_KEY, response.credential);
  };

  const [isLogedIn, setIsLogedIn] = useState({
    status: false,
    data: null,
  });

  console.log(process.env.REACT_APP_CLIENT_ID);
  useEffect(() => {
    /* global google */
    // console.log(google);
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_CLIENT_ID,
      callback: handleResponse,
      cancel_on_tap_outside: false,
    });
    // google.accounts.id.renderButton(
    //   document.getElementById("gg-login-btn"),
    //   { theme: "outline", size: "large" } // customization attributes
    // );
    google.accounts.id.prompt();
  }, []);
  const clickLogin = () => {
    google.accounts.id.prompt();
    console.log("clicked");
  };
  return isLogedIn.status ? (
    <img
      src={isLogedIn.data.picture}
      alt=""
      style={{ width: "3rem", borderRadius: "50%" }}
    />
  ) : (
    <i
      className="fas fa-user-circle text-warning ms-2"
      aria-hidden="true"
      style={{ fontSize: "2rem" }}
      onClick={() => clickLogin()}
    ></i>
  );
};
const Right = () => {
  return (
    <div className="d-flex flex-row align-items-center justify-content-center">
      <SearchBar />
      <LoginButton />
    </div>
  );
};
const Header = () => {
  return (
    <header className="px-5">
      <Left />
      <Right />
    </header>
  );
};

export default Header;
