import React from 'react'
import about2 from "../images/about2.svg";
import Common from '../components/Common';
import Slider from '../components/Slider';


const About = () => {
    return (   
      <>
  <h1 className="text-center p-3 text-uppercase font-weight-bold my-3"> About Us </h1>  

  
      <Common name='Welcome to ' 
      word=" Hello, everyone I am Santosh pal I am B.tech graduate as well a good web designer. I have done Advance Diploma in web designing, my strength are I am self-motivated and hardworking and disciplined person, I like to learn new things and achieve as much knowledge as possible.

 "
      imgsrc={about2} 
      visit='/contact' 
      btname="Contact Now" />
      
      </>
    );
};


export default About;
