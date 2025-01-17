import axios from 'axios';
import React, {useState } from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {
  let navigate=useNavigate()
  const [user,setUser]=useState({
    name:"",
    username:"",
    email:""
    
  })
  const {name,username,email}=user;
  const onInputChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value});
  };
  const {id}=useParams()
  const onSubmit=async (e)=>{
    if(!name||!username||!email){
      alert("Please fill in all the fields")
      return;
    }
    e.preventDefault();
   await axios.put(`http://localhost:8080/user`,user)
   navigate("/")
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow '>
            <h2 className='text-center m-4'>Edit User Information</h2>
            <form onSubmit={(e)=>onSubmit(e)} >
            <div className='mb-3'>
              <label htmlFor='Name' className='form-label'>
                Name
              </label>
              <input
              type={"text"}
              className="form-control"
              placeholder="Enter your name"
              name="name"
              value={name}
              onChange={(e)=>onInputChange(e)}
              required

              >
              </input>
            </div>
            <div className='mb-3'>
              <label htmlFor='Username' className='form-label'>
                Username
              </label>
              <input
              type={"text"}
              className="form-control"
              placeholder="Enter your Username"
              name="username"
              value={username}
              onChange={(e)=>onInputChange(e)}
              required

              >
              </input>
            </div>
            <div className='mb-3'>
              <label htmlFor='Email' className='form-label'>
                Email
              </label>
              <input
              type={"text"}
              className="form-control"
              placeholder="Enter your email"
              name="email"
              value={email}
              onChange={(e)=>onInputChange(e)}
              required
              >
              </input>
            </div>
            <button type='submit' className='btn btn-outline-primary'>Submit</button>
            <Link className='btn btn-outline-danger mx-3 ' to="/">Cancel</Link>
            </form>
        </div>
      </div>
    </div>
  )
}

export default EditUser
