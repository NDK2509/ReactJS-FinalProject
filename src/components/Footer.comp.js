import { memo } from "react";

const Footer = () => {
  return (
		<footer className="mt-3">
			<div
				className="text-center pb-3"
				style={{ fontSize: "0.8rem", background: "#eee" }}
			>
				<hr />
				<b>Designed by NDK&reg;</b>
			</div>
		</footer>
	);
}
export default memo(Footer)
