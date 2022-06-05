import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { memo } from "react";
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
const SearchBar = () => {
  const navigate = useNavigate()
  // const [searchParams, setSearchParams] = useSearchParams()
  const searchHandler = (e) => {
    e.preventDefault()
    navigate("/Search")
  }
  return (
    <div className="search-bar">
      <form onSubmit={searchHandler}>
        <input type="text" name="searchKey" placeholder="Nhập tên tỉnh thành..." />
        <button type="submit" style={{background: "transparent", border: "none"}}>
          <i className="fa fa-search ms-3" aria-hidden="true"></i>
        </button>
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

export default memo(Header)