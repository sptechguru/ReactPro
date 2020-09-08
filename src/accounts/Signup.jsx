import React from 'react';
import  { useState } from 'react';


 const Signup = () => {

    const [data , setData] = useState({
        fullname: "",
        email: "",
        phone: "",
        password: "",
        confirmpassword:"",
    
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
    
    
        alert (` 
          My Name is ${data.fullname}.
          My Mobile Number is ${data.phone} .
          and Email id is ${data.email} .
        `);
    
      };


    return (
        
        <div className=" container-fluid bg-light text-white font-weight-bold " >

        <div className="container ">
          <div className="row p-5">
            <div className="col-md-8 p-5 card bgs col-10 mx-auto" >
   
            <h1 className="text-center text-white text-uppercase font-weight-bold">Signup </h1>  

<form onSubmit={formSubmit}>
<div class="form-group">
    <label for="exampleInputEmail1">Enter Your  FullName</label>
    <input type="text" 
    name="fullname"
    value={data.fullname}
    onChange={inputEvent}
    class="form-control"  
    placeholder="Enter Your Fullname"/>
  </div>

  <div class="form-group">
    <label for="exampleInputEmail1">Enter Your  Email</label>
    <input type="email" 
    name="email"
    value={data.email}
    onChange={inputEvent}
    class="form-control"  
    placeholder="Enter Your Email"/>
  </div>

  <div class="form-group">
  <label for="exampleInputEmail1">Enter Your  Mobile Number</label>
  <input type="text" 
  name="phone"
  value={data.phone}
  onChange={inputEvent}
  class="form-control"  
  placeholder="Enter Your Mobile Number"/>
</div>


  <div class="form-group">
    <label for="exampleInputEmail1">Enter Your  password</label>
    <input type="password" 
    name="password"
    value={data.password}
    onChange={inputEvent}
    class="form-control"  
    placeholder="Enter Your password"/>
  </div>


  <div class="form-group">
    <label for="exampleInputEmail1">Enter Your Confirm Password</label>
    <input type="password"
    value={data.confirmpassword}
    onChange={inputEvent}
    name="confirmpassword"
     class="form-control"
      placeholder="Enter Your Confirm Password"/>
  </div>



  <button type="submit" class="btn btn-success  btn-md btn-block  ">Signup</button>
</form>
              
    </div>
    </div>
    </div>
    </div>
    );
}

export default Signup;
