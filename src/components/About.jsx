import React from 'react';
import pic from "../images/abtimg.jpg"
const About = () => {
    return (
        <div className="about my-5" id="about">
            <div className="text-center">
                <h1 className="display-4">About Us</h1>
                <hr className="w-25 mx-auto" />

                <div className="container my-5">
                    <div className="row">
                        <div  data-aos="fade-right" className="col-lg-6 col-md-6 col-sm-6">
                            <figure>
                                <img src={pic} alt="" className="img-fluid" />
                            </figure>
                        </div>
                        <div  data-aos="fade-left" className="col-lg-6 col-md-6 col-sm-6 left">
                            <h1 className="mb-4">My Journey</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Fugit esse, corrupti possimus deleniti provident in quas
                            architecto, est eius illum vel dignissimos consequatur enim
                            harum nemo facilis accusantium ipsam impedit.</p>
                            <button type="button" className="btn btn-outline-info mt-3">Check More</button>
                        </div>



                    </div>
                </div>
            </div>


        </div>
    );
};

export default About;