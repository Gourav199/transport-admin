import React from 'react'
import "./css/dashboars.css"
export default function Dashboard() {
	

  const handleButtonClick = () => {
	window.open('/lr-entry', '_blank');
  };
  const handleButtonClickVIewLR = () => {
	window.open('/view-lr', '_blank');
  };
  const handleButtonClickChangeStatus = () => {
	window.open('/change-status', '_blank');
  };
  return (
	<div className='container-fluid'>
		<div className="row mt-5 pt-5">
			<div className="col-lg-3 col-md-6 mb-3 mt-4">
			<button className="btn btn-primary btn-block button" onClick={handleButtonClickChangeStatus}>Change Status</button>
			
			</div>
			<div className="col-lg-3 col-md-6 mb-3">
			<button className="btn btn-primary btn-block button" onClick={handleButtonClick}>Generate LR</button>
			</div>
			<div className="col-lg-3 col-md-6 mb-3">
			<button className="btn btn-primary btn-block button">Check Lr Status</button>
			</div>
			<div className="col-lg-3 col-md-6 mb-3">
			<button className="btn btn-primary btn-block button"  onClick={handleButtonClickVIewLR}>View LR</button>
			</div>
  		</div>
	</div>
  )
}
