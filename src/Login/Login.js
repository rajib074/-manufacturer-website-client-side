import React from "react";

const Login = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="card w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <h1 className="text-4xl text-center uppercase mb-3">Log In</h1>

              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div class="flex flex-col w-full border-opacity-50">
              <div class="">
              <div className="form-control">
              <button className="btn btn-primary">Login</button>
            </div>
              </div>
              <div class="divider">OR</div>
              <div class="">
              <div className="form-control">
                  <div className="flex flex-wrap justify-center">
              <button className="btn btn-primary  w-1/2">Google</button>
              <button className="btn btn-primary w-1/2">Facebook</button>
                      
                  </div>

            </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
