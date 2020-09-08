import React from 'react'
import hero from "../images/post.png";
import { NavLink } from 'react-router-dom';

const Common = (props) => {
    return (   
      <section className="d-flex align-items-center" id="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1  ">
                <h1>
                  {props.name} 
                  <span className="text-primary font-weight-bold ">Sptech</span></h1>
                <h4 className="my-3">{props.word}</h4>
                <div className="mt-3">
                  <NavLink className="btn" to={props.visit}>Get Started</NavLink>
                  
                </div>
              </div>
            <div className="col-lg-6 order-1 order-lg-2 header_img ">
              <img className="img-fluid img animated" src={props.imgsrc} alt="hero user"/>
            </div>
            </div>
          </div>
           </div>
           </div>
      </section>
    );
};


export default Common;
