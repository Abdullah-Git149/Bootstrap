import React, { useState } from 'react';
import pic1 from "../images/s1.jpg"
import pic2 from "../images/s2.jpg"
import pic3 from "../images/s3.jpg"
import pic4 from "../images/s4.jpg"
import pic5 from "../images/s5.jpg"
import pic6 from "../images/s6.jpg"
const Services = () => {
    const [servicedata, set] = useState([
        {
            id: 1,
            pic: pic1
        },
        {
            id: 2,
            pic: pic2
        },
        {
            id: 3,
            pic: pic3
        },
        {
            id: 4,
            pic: pic4
        },
        {
            id: 5,
            pic: pic5
        },
        {
            id: 6,
            pic: pic6
        },
    ])
    return (
        <div className="services py-5 bg-light">
            <div className="services__data">
                <h1 className="display-4 d-flex justify-content-center">Services</h1>
                <hr className="mx-auto w-25" />

                <div className="container my-5">
                    <div className="row">
                        {
                            servicedata.map((data) => (
                                <>
                                    <div data-aos="fade-down" className=" col-md-6 col-lg-6 col-sm-12 mx-auto m-3">
                                        <div className="card " style={{ maxWidth: '540px' }}>
                                            <div className="row">
                                                <div className="col-md-5 carusal__img">
                                                    <img src={data.pic} alt="..." className="img-fluid" />
                                                </div>
                                                <div className="col-md-7">
                                                    <div className="card-body">
                                                        <h5 className="card-title">Card title</h5>
                                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. </p>
                                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ))
                        }


                        <div className="mx-auto d-flex justify-content-center my-3">
                            <button type="button" class="btn btn-outline-info">Check Now</button>
                        </div>

                    </div>
                </div>



            </div>
        </div>
    );
};

export default Services;