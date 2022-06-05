import { Link } from "react-router-dom";
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
  return (
    <div className="search-bar">
      <form>
        <input type="text" placeholder="Nhập tên tỉnh thành..." />
        <i className="fa fa-search ms-3" aria-hidden="true"></i>
      </form>
    </div>
  )
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