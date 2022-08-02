import React, { useContext} from "react";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import { Context } from "../store/appContext";


export const Navbar = () => {
	 const { store, actions}= useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<img src="https://static.nike.com/a/images/f_jpg,q_auto:eco/61b4738b-e1e1-4786-8f6c-26aa0008e80b/swoosh-logo-black.png" style={{ width: "8rem" }}></img>
				</Link>
				<div className="ml-auto">
				<Dropdown>
     				 <Dropdown.Toggle variant="success" id="dropdown-basic">
					Favorites
					</Dropdown.Toggle>

				<Dropdown.Menu>
					{store.favorites.map((fav, index) => {
						return (
							<Dropdown.Item>{fav}</Dropdown.Item>
						)
					})}
				</Dropdown.Menu>
				</Dropdown>
				</div>
			</div>
		</nav>
	);
};
