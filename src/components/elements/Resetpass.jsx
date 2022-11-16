import React from 'react'

function Resetpass({setEmail, resetAction}) {
    return (
      <div>
         <div className="loginform">
        <div className="container">
          <div className="row">
            <div className="col-md-5 mx-auto my-5">
              <div className="card px-5 py-3 ">
                <div className="login">
                  <div>
                    <div></div>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">
                      Enter Your Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="text-center">
                    <button type="submit" className="btn btn-primary " onClick={resetAction}>
                      Submit
                    </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }

export default Resetpass