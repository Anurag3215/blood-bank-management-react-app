import axios from 'axios'
import React, { useState } from 'react'

const AddDonor = () => {


    const AddDonor = () => {
        const [input, changeInput] = useState(
            {
                "donor_name": "",
                "age": "",
                "gender": "",
                "blood_group": "",
                "phone": "",
                "email": "",
                "city": "",
                "weight_kg": "",
                "last_donation_date": ""
            }
        )

        const inputHandler = (event) => {
            changeInput({ ...input, [event.target.name]: event.target.value })
        }

        const readValue = () => {
            console.log(input)
            axios.post("https://host-demo-app.onrender.com/api/add-donor", input).then(
                (response) => {
                    console.log(response.data)
                    alert("Course added successfully")
                }
            ).catch(
                (error) => {
                    console.error("Error adding course:", error)

                    alert("Failed to add course")
                }
            )
        }

    }



    return (
        <div>

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Donor Name</label>
                                <input type="text" className="form-control" placeholder="Enter Donor Name" required name="donor_name"  value={input.donor_name} onChange={inputHandler}/>

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Age</label>
                                <input type="number" className="form-control" placeholder="Enter Age" required min="18" max="65" name="age"  value={input.age} onChange={inputHandler}/>

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Geneder</label>
                                <select className="form-select" required name="gender"  value={input.gender} onChange={inputHandler}><option value="">Select Gender</option><option>Male</option><option>Female</option><option>Other</option></select>

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Blood Group</label>
                                <select className="form-select" required name="blood_group"  value={input.blood_group} onChange={inputHandler}><option value="">Select Blood Group</option><option>A+</option><option>A-</option><option>B+</option><option>B-</option><option>AB+</option><option>AB-</option><option>O+</option><option>O-</option></select>

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Phone</label>
                                <input type="tel" className="form-control" placeholder="Enter Phone Number" required pattern="[0-9]{10}" maxLength={10} title="Phone number must contain exactly 10 digits" name="phone"  value={input.phone} onChange={inputHandler}/>

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Email</label>
                                <input type="email" className="form-control" placeholder="Enter Email" name="email"  value={input.email} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">City</label>
                                <input type="text" className="form-control" placeholder="Enter City" required name="city"  value={input.city} onChange={inputHandler}/>

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Weight</label>
                                <input type="number" className="form-control" placeholder="Enter Weight (kg)" required min="50" name="weight_kg"  value={input.weight_kg} onChange={inputHandler}/>

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">Last Donation Date</label>
                                <input type="text" className="form-control" placeholder="YYYY-MM-DD" maxLength={10} name="last_donation_date"  value={input.last_donation_date} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <button className="btn btn-warning" onClick={readValue}>SUBMIT</button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddDonor