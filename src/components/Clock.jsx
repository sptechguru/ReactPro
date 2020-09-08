import React,{useState} from 'react';

const Clock = () => {
    let time = new Date().toLocaleTimeString();

    const [ctime ,seCtime] = useState(time);
    
    const UpdateTime = () =>{
        time = new Date().toLocaleTimeString();
        seCtime(time);
    }

    setInterval(UpdateTime, 1000);


    return (
        <div className="">
           <h1 className="text-right "><span class="badge badge-dark badge-pill ">{ctime}</span> </h1> 
        </div>
    );
}

export default Clock;
