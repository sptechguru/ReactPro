import React from 'react';
import  { useState } from 'react';
import Swal from 'sweetalert2/dist/sweetalert2.js';


const Contact = () => {
  
  const [data , setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",

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
      My Message is ${data.message} `);

  };

    return (

        <div className=" py-3 container-fluid bg-light" >
          <h1 className="text-center text-uppercase font-weight-bold">Contact Us</h1>  

        <div className="container contact_div">
          <div className="row  p-5">
            <div className="col-md-6 col-10 mx-auto">

            <form onSubmit={formSubmit}>

            <div class="form-group">
    <label for="exampleInputEmail1">Enter Your Name</label>
    <input type="name" 
    name="fullname"
    value={data.fullname}
    onChange={inputEvent}
    class="form-control"  
    placeholder="Enter Your FullName"/>
    
    
  </div>

  <div class="form-group">
    <label for="exampleInputEmail1">Enter Your Phone Number</label>
    <input type="name"
    value={data.phone}
    onChange={inputEvent}
    name="phone"
     class="form-control"
      placeholder="Enter Your Mobile Number"/>
  </div>


  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email"
    value={data.email}
    onChange={inputEvent}
     name="email"
     class="form-control" 
    placeholder="Enter Your Email"/>
  </div>

  <div class="form-group">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea
     name="message"
     value={data.message}
     onChange={inputEvent}
      class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>


  <button type="submit" class="btn btn-success ">Submit Form</button>
</form>
              
            </div>
            <br/>

            <div className="col-md-6  p-3">
            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3679.394570289608!2d75.8395885144931!3d22.750733832143005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s27%2F1%20prince%20nagar%20bangnagnga%20kushwah%20%20nagar!5e0!3m2!1sen!2sin!4v1597738632238!5m2!1sen!2sin"
             style={{width:"100%" ,height:"400px", border: "5px solid skyblue"}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
          </div>


           </div>

        </div>
    );
};

export default Contact;

