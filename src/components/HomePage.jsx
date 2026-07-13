import React from 'react'
import Navbar from './Navbar'

const HomePage = () => {
    return (
        <div>

            <Navbar/>
            <div className="container mt-5">
                <div className="row align-items-center">

                    <div className="col-lg-6">
                        <h1 className="display-4 fw-bold text-danger">
                            Welcome to Our Blood Bank
                        </h1>

                        <p className="lead mt-4">
                            Every drop of blood you donate has the power to save a life.
                            Our Blood Bank Management System is dedicated to connecting
                            generous donors with patients in need through a safe,
                            efficient, and reliable blood donation network.
                        </p>

                        <p className="mt-3">
                            We maintain accurate donor records, ensure the availability
                            of different blood groups, and help hospitals respond quickly
                            during emergencies. Whether you are a first-time donor or a
                            regular contributor, your donation can make a life-changing
                            difference for someone in need.
                        </p>

                        <p>
                            <strong className="text-danger">
                                Donate Blood • Save Lives • Be a Hero
                            </strong>
                        </p>
                    </div>

                    <div className="col-lg-6">
                        <img
                            src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=700"
                            className="img-fluid rounded shadow"
                            alt="Blood Donation"
                        />
                    </div>

                </div>
            </div>

            {/* About Section */}
            <div className="container my-5">

                <h2 className="text-center text-danger mb-4">
                    About Our Blood Bank
                </h2>

                <div className="row g-4">

                    <div className="col-md-4">
                        <img
                            src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=600"
                            className="img-fluid rounded shadow"
                            alt="Blood Donation Camp"
                        />
                    </div>

                    <div className="col-md-4">
                        <img
                            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600"
                            className="img-fluid rounded shadow"
                            alt="Blood Test"
                        />
                    </div>

                    <div className="col-md-4">
                        <img
                            src="https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=600"
                            className="img-fluid rounded shadow"
                            alt="Hospital"
                        />
                    </div>

                </div>

                <p className="mt-5 text-center fs-5">
                    Our mission is to encourage voluntary blood donation and provide
                    timely access to safe blood for patients in need. We believe that
                    together we can build a healthier community by ensuring that no life
                    is lost due to the shortage of blood.
                </p>

            </div>

        </div>
    )
}

export default HomePage