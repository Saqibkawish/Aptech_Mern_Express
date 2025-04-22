import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Registration() {
  return (
    <div className="register-wrapper">
      <div className="container">
        <div className="row justify-content-center align-items-center min-vh-100">
          <div className="col-md-6">
            <div className="card shadow-lg p-4">
              <h2 className="text-center mb-4 text-primary-custom">Create Account</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Enter password" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                  <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm password" required />
                </div>
                <button type="submit" className="btn btn-primary-custom w-100">Register</button>
              </form>
              <p className="text-center mt-3">Already have an account? <a href="#">Login</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
