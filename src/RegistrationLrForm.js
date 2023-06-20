import React from 'react'
import "./css/signupLr.css"
export default function RegistrationLrForm() {
  return (
    <div class="container">
      <h1 class="heading">Generate LR</h1>
      	<div className='col-4'>
			<div class="container">
				<div class="row justify-content-center">
				<div class="col-md-6">
					<h2>Sign Up</h2>
					<form class="signup-form">
					<div class="form-group">
						<label for="name">LR Number:</label>
						<input type="text" class="form-control" id="name" placeholder="Enter Lr Number" />
					</div>
					<div class="form-group">
						<label for="email">Description:</label>
						<input type="email" class="form-control" id="email" placeholder="Description"/>
					</div>
					<div class="form-group">
						<label for="password">Quantity:</label>
						<input type="text" class="form-control" id="password" placeholder="Enter Quantity" />
					</div>
					<div class="form-group">
						<label for="From">From:</label>
						<input type="text" class="form-control" id="password" placeholder="From" />
					</div>
					<div class="form-group">
						<label for="TO">To:</label>
						<input type="text" class="form-control" id="password" placeholder="To" />
					</div>
					<div class="form-group">
						<label for="TO">Date:</label>
						<input type="date" class="form-control" id="password" placeholder="To" />
					</div>
					<div class="form-group">
						<label for="TO">Vechicle:</label>
						<input type="text" class="form-control" id="password" placeholder="To" />
					</div>
					<button type="submit" class="btn btn-primary">Sign Up</button>
					</form>
				</div>
				</div>
			</div>
      	</div>
   	</div>
  )
}
