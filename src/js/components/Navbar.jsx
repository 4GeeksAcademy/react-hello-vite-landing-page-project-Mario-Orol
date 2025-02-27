import React from "react";


//create your first component
const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5">
            <a className="navbar-brand me-3" href="#">TravelWithUs</a>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Destinations</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Packages</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
	);
};

export default Navbar;