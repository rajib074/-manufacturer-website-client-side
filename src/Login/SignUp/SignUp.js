import React from 'react';

const SignUp = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
        <div className="card w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
          <div className="form-control">
              <h1 className="text-4xl text-center uppercase mb-3">SignUp</h1>

              <label className="label">
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">

              <label className="label">
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <div class="form-control">
  <label class="cursor-pointer label">
    <input type="checkbox" class="checkbox checkbox-secondary" />
  </label>
</div>
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

export default SignUp;