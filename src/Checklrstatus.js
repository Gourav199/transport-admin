import axios from 'axios';
import React, { useState } from 'react';
import logo from "./asset/logo.png";
import "./css/checklrstatus.css"
export default function Checklrstatus() {
    const [lr, setlr] = useState('');
    const [status, setstatus] = useState('');
    const [vechicle, setVechicle] = useState('');
    const handleSubmit =(event) => {
        event.preventDefault()
        axios.post('http://localhost:5000/checklrstatus', {lr}).then(res => 
		{
			console.log(res.data);
            setstatus(res.data.status)
            setVechicle(res.data.vechicle)
		}
		).catch(err =>console.log(err))
    }
    // const handleReset = () => {
    //     setlr('');
    //     setstatus();
    //   };
    
  return (
    <div className='container'>
        <div>
            <img src={logo} className="text-img" alt="iamge" />
        </div>

        {/* <form onSubmit={handleSubmit} className='mt-5'> 
            <input type='text' name='lr' className ='form-control' onChange={(e) => {setlr(e.target.value)}}/>
            <button className='btn btn-primary'>Check Status</button>
        </form> */}
        <div className="col-4">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-6 frm-design">
              <h2 className="color-text text-center">Check Lr  Status</h2>
              <form class="signup-form" onSubmit={handleSubmit}>
                <div class="form-group">
                  <label for="name" className="color-text">
                    LR Number:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="Enter LR Number"
                    value={lr}
                    onChange={(e) => {setlr(e.target.value)}}
                  />
                </div>
                
                <button type="submit" class="btn btn-primary">
                  Check LR Status
                </button>
                {/* <button type="submit" class="btn btn-danger reset"
                onClick={handleReset}>
                  Reset
                </button> */}
              </form>
            </div>
          </div>
        </div>
      </div>
          <div className='col-6'>
            {status !== '' ?(<p className='colors-text'>The status of lr Number :{lr} with vechicle {vechicle}  number is {status}</p>):null}
          </div>
        
    </div>
  )
}
