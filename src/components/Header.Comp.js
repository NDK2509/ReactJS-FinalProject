import { Link, useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";
import "./../assets/css/header.css"

const Left = () => {
  return (
		<div className="left-header d-flex justify-content-evenly align-items-center">
			<img className="img-thumbnail" src="/images/logo.png" style={{width: "10rem"}} alt="" />
			<nav>
				<ul>
          <li><Link to="/">Home</Link></li>
					<li>Du lịch</li>
					<li>Vận chuyển</li>
					<li>Tin tức</li>
					<li>Giảm giá</li>
				</ul>
			</nav>
		</div>
	);
}
const SearchHint = ({hint}) => {
  return (
    <li className="text-dark hint">
      <Link to={{ pathname: "/Search", search: `?searchKey=${hint}` }} >
        <div>{hint}</div>
      </Link>
    </li>
  );
}
const Hints = ({hintList}) => {
  return (
    <ul className="hints">
      {
        hintList.map((hint, index) => <SearchHint key={index} hint={hint.name} />)
      }
    </ul>
  );
}
const SearchBar = () => {
  const navigate = useNavigate()
  const [searchKey, setSearchKey] = useState("")
  const provinces = useMemo(() => require("./../utils/vn-provinces.json"), [])
  const [hintList, setHintList] = useState([]);
  const searchHandler = (e) => {
    e.preventDefault()
    navigate({pathname: "/Search", search : `?searchKey=${searchKey}`})
    setSearchKey("")
  }
  const inputChangeHandler = (e) => {
    const input = e.target.value;
    setHintList(input 
      ? provinces.filter(province => province.name.toLowerCase().startsWith(input.toLowerCase()))
      : [])
    setSearchKey(input)
  }
  return (
    <div className="search-bar">
      <form onSubmit={searchHandler} autoComplete="off">
        <input type="text" name="searchKey" value={searchKey} autoComplete="off" placeholder="Nhập tên tỉnh thành..." onChange={inputChangeHandler}/>
        <button type="submit" style={{background: "transparent", border: "none"}}>
          <i className="fa fa-search ms-3" aria-hidden="true"></i>
        </button>
        {searchKey&&<Hints hintList={hintList}/>}
      </form>
    </div>
  );
}
const Header = () => {
  return (
    <header className="px-5">
      <Left/>
      <SearchBar/>
    </header>
  )
}

export default Header