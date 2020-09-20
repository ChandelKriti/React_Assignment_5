import React , { useState } from 'react'
import './Clock.css';

function Clock() {


    let time = new Date().toLocaleTimeString();

    const [clockTime, clockSetTime] = useState(time);

    const updateTime = () => {
        time = new Date().toLocaleTimeString();
        clockSetTime(time);
    }


    setInterval(updateTime,1000);

    let today= new Date();
    let todayDate = today.getDate() + '-' + ((today.getMonth() + 1)) + '-' + today.getFullYear() ;

    const [noToggle, setToggle] = useState('');

    const setDate = () =>{
       
        if(noToggle==='')
        {
            setToggle(todayDate);
        }
        else{
            setToggle('');
        }

    }

     

    return (
        <div>

        <div>
            <label className="switch">
                <input type="checkbox" onClick={setDate} />
                <span className="slider round"></span>

            </label>

            
        </div>
        
        <div >
            <h1><span className="center">{time}<br /><br />{noToggle}</span></h1>
            

        </div>
        

        </div>
    
    )
}

export default Clock;
