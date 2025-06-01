import { NavLink } from "react-router";
import Logo from "../assets/logo.png";

const Navbar = () => {
	return (
		<nav
			id="navbar-layout"
			className="py-4"
		>
			<div
				id="navbar-content"
				className="max-w-8xl mx-auto flex items-center justify-center gap-x-60"
			>
				<div id="nav-logo">
					<img
						src={Logo}
						alt="Logo"
					/>
				</div>
				<div
					id="nav-items"
					className="px-6 py-3 bg-gradient-to-r from-[#616161]/10 to-[#414141]/10 hover: rounded-full flex items-center gap-x-8"
				>
					<ul className="flex items-center gap-x-2">
						<li>
							<NavLink
								to="/"
								className="px-4 py-3 rounded-full hover:bg-amber-900/5"
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/products"
								className="px-4 py-3 rounded-full hover:bg-amber-900/5"
							>
								Products
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/services"
								className="px-4 py-3 rounded-full hover:bg-amber-900/5"
							>
								Services
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/blogs"
								className="px-4 py-3 rounded-full hover:bg-amber-900/5"
							>
								Blogs
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/about"
								className="px-4 py-3 rounded-full hover:bg-amber-900/5"
							>
								About Us
							</NavLink>
						</li>
					</ul>
					<div className="flex items-center gap-x-2 text-lg font-medium">
						<NavLink to="/login">
							<button
								type="button"
								className="px-5 py-2 bg-primary rounded-full hover:bg-amber-450 transition-colors cursor-pointer"
							>
								Login
							</button>
						</NavLink>
						<NavLink to="/signup">
							<button
								type="button"
								className="px-5 py-2 bg-primary rounded-full hover:bg-amber-450 transition-colors cursor-pointer"
							>
								Sign Up
							</button>
						</NavLink>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
