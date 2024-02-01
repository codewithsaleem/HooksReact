import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <Link to="/" className="navbar-brand ms-3">Emp201</Link>

                <div className="">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/employee" className="nav-link">List of Employees</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/employee/add" className="nav-link">Add New Employee</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Navbar;