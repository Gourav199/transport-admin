import React from 'react'

export default function ChangeStatus() {
  return (
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
						<label for="email">Status:</label>
						<select class="selectpicker" data-live-search="true" data-size="5">
                            <option>Dispatch</option>
                            <option>In Transit</option>
                            <option>Arrived</option>
                            <option>Deliverd</option>
                        </select>
					</div>
					<button type="submit" class="btn btn-primary">Sign Up</button>
					</form>
				</div>
				</div>
			</div>
      	</div>
  )
}
