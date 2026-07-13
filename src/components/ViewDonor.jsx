import React, { useEffect, useState } from 'react'
import NavigationBar from './NavBar'
import axios from 'axios'
import Navbar from './NavBar'

const ViewDonor = () => {
    const [data, changeData] = useState([])

    const fetchData = () => {
        axios.get(" https://host-demo-app.onrender.com/api/donors").then(
            (response) => {
                changeData(response.data)
            }
        ).catch()
    }

    useEffect(
        () => {
            fetchData()
        }, []
    )

    return (
        <div>

            <Navbar />

            <div className="container py-4">

                <h2 className="text-center text-danger fw-bold mb-4">
                    Blood Donor List
                </h2>

                <div className="row g-4">

                    {data.map((value, index) => {
                        return (

                            <div className="col-12 col-sm-4 col-md-4 col-lg-3 col-xl-3 col-xxl-3" key={index}>

                                <div
                                    className="card h-100 border-0"
                                    style={{
                                        borderRadius: "18px",
                                        overflow: "hidden",
                                        boxShadow: "0 8px 20px rgba(0,0,0,0.15)"
                                    }}
                                >

                                    <div
                                        className="text-center py-4"
                                        style={{
                                            background: "linear-gradient(to right, #c31432, #240b36)"
                                        }}
                                    >

                                        <img
                                            src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
                                            alt="Donor"
                                            style={{
                                                width: "80px",
                                                height: "80px",
                                                borderRadius: "50%",
                                                border: "4px solid white",
                                                backgroundColor: "white",
                                                padding: "8px"
                                            }}
                                        />

                                        <h5 className="text-white fw-bold mt-3 mb-1">
                                            {value.donor_name}
                                        </h5>

                                        <span className="badge bg-light text-danger px-3 py-2">
                                            {value.blood_group}
                                        </span>

                                    </div>

                                    <div className="card-body">

                                        <table className="table table-sm table-borderless mb-0">

                                            <tbody>

                                                <tr>
                                                    <th>Age</th>
                                                    <td>{value.age}</td>
                                                </tr>

                                                <tr>
                                                    <th>Gender</th>
                                                    <td>{value.gender}</td>
                                                </tr>

                                                <tr>
                                                    <th>Phone</th>
                                                    <td>{value.phone}</td>
                                                </tr>

                                                <tr>
                                                    <th>Email Id</th>
                                                    <td
                                                        style={{
                                                            wordBreak: "break-word",
                                                            fontSize: "13px"
                                                        }}
                                                    >
                                                        {value.email}
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <th>City</th>
                                                    <td>{value.city}</td>
                                                </tr>

                                                <tr>
                                                    <th>Weight</th>
                                                    <td>{value.weight_kg} kg</td>
                                                </tr>

                                                <tr>
                                                    <th>Last Donation</th>
                                                    <td>{value.last_donation_date || "N/A"}</td>
                                                </tr>

                                            </tbody>

                                        </table>

                                    </div>

                                    <div className="card-footer bg-white border-0 pb-3">

                                        <button className="btn btn-danger w-100 fw-semibold">
                                            Available Donor
                                        </button>

                                    </div>

                                </div>

                            </div>

                        )
                    })}

                </div>

            </div>

        </div>
    )
}

export default ViewDonor