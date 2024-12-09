import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert2';

const AddUser = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!name || !username || !email) {
      swal.fire("Error!", "Please fill in all the fields", "error");
      return;
    }

    try {
      await axios.post("http://localhost:8080/user", user);
      swal.fire("Success!", "Data added successfully", "success");
      navigate("/");
    } catch (error) {
      swal.fire("Error!", "Failed to add user", "error");
    }
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'>Register</h2>
          <form onSubmit={onSubmit}>
            <div className='mb-3'>
              <label htmlFor='Name' className='form-label'>
                Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={onInputChange}
                required
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='Username' className='form-label'>
                Username
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your Username"
                name="username"
                value={username}
                onChange={onInputChange}
                required
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='Email' className='form-label'>
                Email
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                name="email"
                value={email}
                onChange={onInputChange}
                required
              />
            </div>
            <button type='submit' className='btn btn-outline-primary'>Submit</button>
            <Link className='btn btn-outline-danger mx-3' to="/">Cancel</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUser;