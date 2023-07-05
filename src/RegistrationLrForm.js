import React, { useState } from "react";
import "./css/signupLr.css";
import logo from "./asset/logo.png";
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function RegistrationLrForm() {
  const [lrNumber, setlrNumber] = useState();
  const [description, setdescription] = useState("");
  const [quantity, setquantity] = useState(0);
  const [from, setfrom] = useState("");
  const [to, setto] = useState("");
  const [date, setdate] = useState();
  const [consiner, setconsiner] = useState("");
  const [consignee, setconsignee] = useState("");
  const [vechicle, setvechicle] = useState("");
  const [status, setstatus] = useState("dispatch");
  const history = useHistory();

  const handleRegistration =  (event) => {
    event.preventDefault();
	if (lrNumber!== '' && description!== '' && quantity!== '' && from !== '' && to !== '' && date !== '' && consiner !== '' &&  consignee !== '' && vechicle !== '') {
		event.preventDefault()
		axios.post('http://localhost:5000/register', {lrNumber, description, quantity, from, to, date, consiner, consignee, vechicle, status}).then(res => 
		{
      alert(res.data)
      setlrNumber('');
      setdescription('');
      setquantity('');
      setfrom('');
      setto('');
      setdate('');
      setconsiner('');
      setconsignee('');
      setvechicle('');

      console.log("suceesful", res)
			history.push('/dashboard');
		}
		).catch(err =>console.log(err))
	}
	event.preventDefault()
	// axios.post('http://localhost:5000/login', {username, password}).then(res => 
	// {
	// 	history.push('/dashboard');
	// }
	// ).catch(err =>console.log(err))
};
  return (
    <div class="container">
      <div>
        <img src={logo} className="text-img" alt="iamge" />
      </div>

      <div className="col-4">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-6 form-design">
              <h2 className="color-text text-center">Generate LR</h2>
              <form class="signup-form" onSubmit={handleRegistration}>
                <div class="form-group">
                  <label for="name" className="color-text">
                    LR Number:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="Enter Lr Number"
                    value={lrNumber}
					name='lrnumber'
					onChange={e => setlrNumber(e.target.value)}
                  />
                </div>
                <div class="form-group">
                  <label for="email" className="color-text">
                    Description:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="email"
                    placeholder="Description"
					name='description'
					value={description}
					onChange={e => setdescription(e.target.value)}
                  />
                </div>
                <div class="form-group">
                  <label for="password" className="color-text">
                    Quantity:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="password"
                    placeholder="Enter Quantity"
					value={quantity}
					name='quantity'
					onChange={e => setquantity(e.target.value)}
                  />
                </div>
                <div class="form-group">
                  <label for="From" className="color-text">
                    From:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="password"
                    placeholder="From"
					value={from}
					name='from'
					onChange={e => setfrom(e.target.value)}
                  />
                </div>
                <div class="form-group" className="color-text">
                  <label for="TO">To:</label>
                  <input
                    type="text"
                    class="form-control"
                    id="password"
                    placeholder="To"
					name='to'
					value={to}
					onChange={e => setto(e.target.value)}
                  />
                </div>
                <div class="form-group">
                  <label for="TO" className="color-text">
                    Date:
                  </label>
                  <input
                    type="date"
                    class="form-control"
                    id="password"
                    placeholder="To"
					name='date'
					value={date}
					onChange={e => setdate(e.target.value)}
                  />
                </div>
                <div class="form-group">
                  <label for="Consiner" className="color-text">
                    Consiner:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="password"
                    placeholder="Consiner"
					name='consiner'
					value={consiner}
					onChange={e => setconsiner(e.target.value)}
                  />
                </div>
                <div class="form-group">
                  <label for="Consignee" className="color-text">
                    Consignee:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="Consignee"
                    placeholder="Consignee"
					name='consignee'
					value={consignee}
					onChange={e => setconsignee(e.target.value)}
                  />
                </div>
                <div class="form-group">
                  <label for="TO" className="color-text">
                    Vechicle:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="password"
                    placeholder="Vechicle"
					name='vechicle'
					value={vechicle}
					onChange={e => setvechicle(e.target.value)}
                  />
                </div>
                <button type="submit" class="btn btn-primary text-center">
                  Generate LR
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
