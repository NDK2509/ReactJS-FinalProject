import "./../assets/css/header.css"
const Left = () => {
  return (
		<div className="left-header d-flex justify-content-evenly align-items-center">
			<img className="img-thumbnail" src="images/logo.png" style={{width: "10rem"}} alt="" />
			<nav>
				<ul>
					<li>Travel</li>
					<li>Delivery</li>
					<li>News</li>
					<li>Voucher</li>
				</ul>
			</nav>
		</div>
	);
}
const SearchBar = () => {
  return (
    <div className="search-bar">
      <form>
        <input type="text" placeholder="Enter sommething..." />
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