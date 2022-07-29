import React, { useContext} from "react";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';

export const Navbar = () => {
	// const { store, actions}= useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<img src="https://static.nike.com/a/images/f_jpg,q_auto:eco/61b4738b-e1e1-4786-8f6c-26aa0008e80b/swoosh-logo-black.png" style={{ width: "8rem" }}></img>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Favorites</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
