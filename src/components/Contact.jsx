import React from 'react';

const Contact = () => {
    return (
        <div className="contact py-5" id="contact" data-aos="fade-down">
            <div className="container">
                <div className="row">
                    <div className="pb-4 d-flex align-items-center flex-column justify-content-center">
                        <h1 className="display-5">Contact Us</h1>
                        <hr className="w-25" />
                    </div>
                    <div className="col-lg-8  col-12 mx-auto">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                            </div>
                            <div className="mb-3">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue="option1" />
                                    <label className="form-check-label" htmlFor="inlineCheckbox1">Male</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" defaultValue="option2" />
                                    <label className="form-check-label" htmlFor="inlineCheckbox2">Female</label>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="formFile" class="form-label">Default file input example</label>
                                <input class="form-control" type="file" id="formFile" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;