import React from 'react';
import Typed from "react-typed"
const Check = () => {
    return (
        <div className="check">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 d-flex flex-column justify-content-center align-items-center text-center checkdata">
                        <h1 className="mb-3 text-white">Check Out My Account</h1>
                        <Typed
                        className="text-white type"
                        strings={["Never give up on something your success will pay you","You will face many defeats in life, but never let yourself be defeated","In the end, it's not the years in your life that count."]}
                        typeSpeed={5}
                        backSpeed={10}
                        loop
                        />
                        <p></p>
                 <button type="button" class="btn btn-outline-info" data-bs-toggle="modal" data-bs-target="#exampleModal">Visit Now</button>

                    </div>
                </div>
            </div>
            <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">GitHub</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        View my Github Repo
      </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <a href="https://github.com/Abdullah-Git149">   <button type="button" class="btn btn-primary">View</button></a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Check;