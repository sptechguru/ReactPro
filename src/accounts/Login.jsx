import React from 'react';
import  { useState } from 'react';
import { NavLink } from 'react-router-dom';



const Login = () => {

    const [data , setData] = useState({
        username: "",
        password: "",
       
    
      });
    
      const inputEvent = (event) => {
        const { name, value } = event.target;
    
        setData((preVal) => {
          return {
             ...preVal,
             [name]: value,
    
          };
        });
      };
    
      
    
      const formSubmit = (e) => {
    
        e.preventDefault();
        alert (` My Name is ${data.username} .`);
    
      };
    return (


        <div className=" container-fluid bg-light text-white font-weight-bold " >

        <div className="container  ">
          <div className="row p-5">
            <div className="col-md-8 p-5 card bgs col-10 mx-auto" >
          <h1 className="text-center text-white text-uppercase font-weight-bold">Login Page</h1>  

<form onSubmit={formSubmit}>
<div class="form-group">
    <label for="exampleInputEmail1">Enter Your User Name</label>
    <input type="name" 
    name="username"
    value={data.username}
    onChange={inputEvent}
    class="form-control"  
    placeholder="Enter Your User Name"/>
  </div>


  <div class="form-group">
    <label for="exampleInputEmail1">Enter Your Password</label>
    <input type="password"
    value={data.password}
    onChange={inputEvent}
    name="password"
     class="form-control"
      placeholder="Enter Your Password"/>
  </div>

  <button type="submit" class="btn btn-danger btn-md btn-block  ">Login</button>
<hr/>
  <NavLink className=" btn btn-primary text-white m-auto" to="/signup">Create New Accounts ??..</NavLink>

</form>
              
    </div>
    </div>
    </div>
    </div>



    );
    
  };

export default Login;
