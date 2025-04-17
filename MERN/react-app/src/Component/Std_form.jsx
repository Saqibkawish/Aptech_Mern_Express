import React, { useEffect, useState } from "react";
import axios from "axios";

const Std_form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState(0);

    function savaDataInAPI() {
       try {
        axios.post("http://localhost:3004/save",{
            u_name: name,
            u_email: email,
            u_password:password,
            u_age:age,  u_address: "Karachi",
            u_gender: "Male",

       })
        alert("data SAve Successfully")
       } catch (error) {
        console.log(error)
        
       }
    }

    return (
        <div className="login-container">

            <div className="login-card">
                <h2 className="text-center fw-bold my-4">User Registration Form</h2>

                <div>
                    <div className="mb-3">
                        <label className="form-label">- Enter Name</label>
                        <input
                            type="text"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter Name"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">- Enter Email</label>
                        <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter Email"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">- Enter Password</label>
                        <input
                            type="text"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter Password"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">- Enter Age</label>
                        <input
                            type="number"
                            className="form-control"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            placeholder="Enter Age"
                        />
                    </div>

                    <button className="btn btn-primary w-100 fw-bold mt-4 mb-3" onClick={savaDataInAPI}>
                        SUBMIT
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Std_form;