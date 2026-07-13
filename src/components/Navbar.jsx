import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
    <div>

        <nav
            className="navbar navbar-expand-lg navbar-dark py-3"
            style={{
                background: "linear-gradient(90deg, #8B0000, #C62828)",
                boxShadow: "0 8px 20px rgba(0,0,0,0.25)"
            }}
        >
            <div className="container">

                <Link
                    className="navbar-brand fw-bold fs-3"
                    to="/"
                    style={{
                        letterSpacing: "1px",
                        color: "#fff"
                    }}
                >
                    Blood Bank
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse justify-content-end"
                    id="navbarNav"
                >

                    <ul className="navbar-nav">

                        <li className="nav-item mx-2">
                            <Link
                                className="nav-link active px-3 py-2 rounded-pill fw-semibold"
                                to="/"
                                style={{
                                    color: "white",
                                    transition: "0.3s",
                                    backgroundColor: "rgba(255,255,255,0.15)"
                                }}
                            >
                                Home
                            </Link>
                        </li>

                        <li className="nav-item mx-2">
                            <Link
                                className="nav-link px-3 py-2 rounded-pill fw-semibold"
                                to="/add"
                                style={{
                                    color: "white",
                                    transition: "0.3s"
                                }}
                            >
                                Add Donor
                            </Link>
                        </li>

                        <li className="nav-item mx-2">
                            <Link
                                className="nav-link px-3 py-2 rounded-pill fw-semibold"
                                to="/view"
                                style={{
                                    color: "white",
                                    transition: "0.3s"
                                }}
                            >
                                View Donors
                            </Link>
                        </li>

                    </ul>

                </div>

            </div>
        </nav>

    </div>
)
}

export default Navbar