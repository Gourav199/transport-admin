import React, { useEffect, useState } from "react";
import "./css/changestatus.css";
import logo from "./asset/logo.png";
import axios from "axios";

export default function ChangeStatus() {
  const [lrNumber, setLRNumber] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (e) => {
    setLRNumber(e.target.value);
  };
  const handleOptionChanges = (e) => {
    setSelectedOption(e.target.value);
  };
  const handleChangestatus = (e) => {
    // console.log(lrNumber + "" + selectedOption);
    e.preventDefault();
    debugger
    if (lrNumber !== "" && selectedOption !== "") {
        debugger
      axios
        .post("http://localhost:5000/changelrstatus", {
          lrNumber,
          selectedOption,
        })
        .then((res) => {
          alert("Suceessfully Changed Status");
          setLRNumber("");
          setSelectedOption("");
        })
        .catch((err) => console.log(err));
    } else {
      alert("Please enter the details correctly");
    }
  };

  return (
    <div className="container">
      <div>
        <img src={logo} className="text-img" alt="iamge" />
      </div>
      <div className="col-4">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-6 frm-design">
              <h2 className="color-text text-center">Change Status</h2>
              <form class="signup-form" onSubmit={handleChangestatus}>
                <div class="form-group">
                  <label for="name" className="color-text">
                    LR Number:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    name="name"
                    placeholder="Enter LR Number"
                    value={lrNumber}
                    onChange={handleChange}
                  />
                </div>
                <div class="form-group">
                  <label for="status" className="color-text">
                    Status:
                  </label>
                  <select
                    id="selectOption"
                    value={selectedOption}
                    onChange={handleOptionChanges}
                    className="form-control"
                  >
                    <option value="">-- Select --</option>
                    <option value="dispatch">Dispatch </option>
                    <option value="arrived">Arrvied</option>
                    <option value="intransit">Intransit </option>
                    <option value="delivered">Delivered </option>
                  </select>
                </div>
                <button type="submit" class="btn btn-primary">
                  Change Status
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
