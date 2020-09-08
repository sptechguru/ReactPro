import React from 'react'
import home2 from "../images/home2.png";

import { NavLink } from 'react-router-dom';
import Common from '../components/Common';
import Slider from '../components//Slider';

const Home = () => {
    return ( 
      
      <>
      
<Slider/>
 
      <Common name='Grow Your Bussiness ' 
      word=" Hello everyone I am Santosh Pal and I am React developer designs and implements user-facing features for websites and applications using React. js. They are known as front-end developers, a sub-group of developers that manage everything that users see on their web browsers or applications. "
      imgsrc={home2} 
      visit='/service' 
      btname="Contact Now" />

      </>

    );
};


export default Home;
