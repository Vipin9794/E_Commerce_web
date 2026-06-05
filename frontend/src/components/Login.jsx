import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const [formData , setFormData] = useState([
    {
    username:"",
    password:"",
    }
  ]);
  const navigate = useNavigate();

  const {username, password} = formData;


  const handleOnChange = (e)=>{
    
 setFormData({...formData, [e.target.name]:[e.target.value]})

  }
  const handleSubmit = (e)=> {
    e.preventDefault();
    alert("Login Successfully ");
    console.log(formData);
    navigate('/');

  }


  return (
    <div className="flex items-center  justify-center  ">
      <div className="bg-white  p-5  rounded-lg absolute top-[30%] shadow-lg ">
        <h1 className="text-center text-2xl font-bold">Login</h1>
     <div className="border mt-3"></div>
        <form onSubmit={handleSubmit} className=" p-8 flex flex-col gap-6 justify-center items-center">
          
          <div className="flex gap-6 ">
            <lable> Username:</lable>
            <input
              type="email"

              name="username"
              value={username}
              placeholder=" Enter your email"
              className="border rounded-sm p-1"
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="flex gap-6">
            <lable> Password:</lable>
            <input
              type="password"
              name="password"
              value={password}
              placeholder=" Enter your password"
              className="border rounded-sm p-1"
              onChange={handleOnChange}
              required
            />
          </div>
          <button type="submit"  className="flex  items-center justify-center gap-6 w-full p-1 bg-black text-white  border rounded-lg cursor-pointer">
            Login
          </button>
           <div className="flex justify-between  gap-22">
            <div className="text-black-900">If user not register </div>
            <a href="/signup" className="text-blue-700"> Signup</a>
          </div>
        </form>
      </div>
    </div>
  );
}
