import React from 'react';
import pic1 from "../images/c1.jpg"
import pic2 from "../images/a4.jpg"
import pic3 from "../images/c3.jpg"
import pic4 from "../images/c4.jpg"
const Slider = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide width70vh"  data-bs-ride="carousel" >
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
                </div>
                <div className="carousel-inner picwidth" >
                    <div className="carousel-item active pic">
                        <img src={pic1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item pic">
                        <img src={pic2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item pic">
                        <img src={pic3} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item pic">
                        <img src={pic4} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            
        </div>
    );
};

export default Slider;