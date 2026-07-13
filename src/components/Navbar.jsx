import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>

            <nav
                className="navbar navbar-expand-lg navbar-dark"
                style={{
                    background: "linear-gradient(90deg, #b71c1c, #d32f2f)",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
                }}
            >
                <div className="container">

                    <Link className="navbar-brand fw-bold fs-3" to="/">
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
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                            <Link class="nav-link" to="/add">Add Donor</Link>
                            <Link class="nav-link" to="/view">View Donors</Link>
                        </div>
                    </div>

                </div>
            </nav>

        </div>
    )
}

export default Navbar