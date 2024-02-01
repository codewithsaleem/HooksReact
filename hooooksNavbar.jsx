import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <Link to="/" className="navbar-brand ms-3">Portal101</Link>

                <div className="">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/person" className="nav-link">All Perosns</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/person/add" className="nav-link">Add Perosn</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Navbar;