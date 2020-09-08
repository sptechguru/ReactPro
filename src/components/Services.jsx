import React from 'react'
import Card from '../components/Card';
import Sdata from '../components/Sdata';
import Slider from '../components/Slider';



 const Services = () => {
    return (
        <div className="container-fluid">
  <h1 className="text-center text-uppercase font-weight-bold p-3 "> Our Services </h1>  

          <div className="mb-5">

            <div className="row">
              <div className="col-10 mx-auto">
                <div className="row gy-5 " >

                  { 
                    Sdata.map((val ,ind) => {
                      return <Card key={ind}
                      imgsrc={val.imgsrc}
                      tittle={val.tittle} />
                    })
                  }

                </div>
              </div>
              
            </div>
          </div>
            
        </div>
    );
};

export default Services;



