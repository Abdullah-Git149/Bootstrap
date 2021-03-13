import React from 'react';
import pic1 from "../images/a1.jpg"
import pic2 from "../images/c2.jpg"
import pic3 from "../images/a3.jpg"
import pic4 from "../images/a4.jpg"
import pic5 from "../images/a5.jpg"
import pic6 from "../images/a6.jpg"
const Gallery = () => {
    return (
        <div className="gallery my-5">
            <h1 className="text-center">Gallery</h1>
            <hr className="w-25 mx-auto" />
            <div className="container">
                <div className="row gy-4">
                    <div data-aos="flip-left" className="col-lg-4 col-md-6 col-sm-12 ">
                        <div className="transform__img">
                            <img src={pic1}  alt="" />
                        </div>
                    </div>
                    <div data-aos="flip-left" className="col-lg-4 col-md-6 col-sm-12">
                        <div className="transform__img">
                            <img src={pic2}  alt="" />
                        </div>
                    </div>
                    <div data-aos="flip-left" className="col-lg-4 col-md-6 col-sm-12">
                        <div className="transform__img">
                            <img src={pic3}  alt="" />
                        </div>
                    </div>
                    <div data-aos="flip-left" className="col-lg-4 col-md-6 col-sm-12">
                        <div className="transform__img">
                            <img src={pic4}  alt="" />
                        </div>
                    </div>
                    <div data-aos="flip-left" className="col-lg-4 col-md-6 col-sm-12">
                        <div className="transform__img">
                            <img src={pic5}  alt="" />
                        </div>
                    </div>
                    <div  data-aos="flip-left" className="col-lg-4 col-md-6 col-sm-12">
                        <div className="transform__img">
                            <img src={pic6}  alt="" />
                        </div>
                    </div>
                 
                </div>
            </div>

        </div>
    );
};

export default Gallery;