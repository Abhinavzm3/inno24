import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup } from "@radix-ui/react-radio-group";
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const[input,setInput]=useState({
    email:"",
    password:"",
    role:""
  })
  const handleChange=(e)=>{
    setInput({...input,[e.target.name]:e.target.value});
  }
  const submitHandler=(e)=>{
    e.preventDefault();
    // form data to be sent to server
//     try{
// const res=awaits axios.post()
//     }catch(error){

//     }
  }
  
  
  return (
    <div className="flex items-center justify-center max-w-7xl mx-auto">
      <form
        onSubmit={submitHandler}
        className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
      >
        <h1 className="font-bold text-xl mb-5">Login</h1>
        <div className="my-2">
          <Label>Email</Label>
          <Input type="email" 
           value={input.email}
           name="email" 
           onChange={handleChange} 
         placeholder="Spooderman@gmail.com" />
        </div>
        <div className="my-2">
          <Label>Password</Label>
          <Input type="password"
            value={input.password}
            name="password" 
            onChange={handleChange} 
          placeholder="Spooderman@123"/>
        </div>
        <div className="flex items-center justify-between">
          <RadioGroup className="flex items-center gap-4 my-5">
            <div className="flex items-center space-x-2">
              <Input
               type="radio"
               name="role"
               value="Student"
               checked={input.role==="Student"} 
               onChange={handleChange} 
               className="cursor-pointer"

               />
              <Label htmlFor="option-one">Student</Label>
            </div>
            <div className="flex items-center space-x-2">
            <Input
              type="radio"
              name="role"
              value="Recruiter"
              checked={input.role==="Recruiter"}  
              onChange={handleChange} 
              className="cursor-pointer"
               />
              <Label htmlFor="option-two">Recruiter</Label>
            </div>
          </RadioGroup>
        </div>
        <button type="submit" className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
          Login
        </button>
        <span className="text-sm" >Don't have an Account? <Link to="/signup" className="text-blue-500">Login</Link> </span>
      </form>
    </div>
  );
};

export default Login;
