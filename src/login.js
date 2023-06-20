import React, { useState } from 'react';
import "./css/style.css";
import { useHistory } from 'react-router-dom';

export default function Login () {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const history = useHistory();
  
	const handleLogin = async () => {
		
		if(username === 'admin' && password === 'admin') {
			history.push('/dashboard');
		}
	};
   
  return (
    <div>
        <div className="container">
	<div className="screen">
		<div className="screen__content">
			{/* <form className="login" onSubmit={handleLogin}>
				<div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input" placeholder="User name / Email" onChange={e => setUsername(e.target.value)}   name='username'/>
				</div>
				<div className="login__field">
					<i className="login__icon fas fa-lock"></i>
					<input type="password" className="login__input" placeholder="Password" onChange={e => setPassword(e.target.value)}name='password'/>
				</div>
				<button className="button login__submit" >
					<span className="button__text">Log In Now</span>
					<i className="button__icon fas fa-chevron-right"></i>
				</button>				
			</form> */}
			<form onSubmit={handleLogin}>
				<div class="form-group">
				<label for="name" class="form-name">Username</label>
				<div class="row">
					<div class="col-11">
						<input type="text" class="form-control frm-width" id="name" placeholder="Enter your name" onChange={e => setUsername(e.target.value)}   name='username'/>
					</div>
					<div class="col-1">
						<i class="far fa-user-circle"></i>
					</div>
				</div>
				
				</div>
				
				<div class="form-group">
					<label for="password" class="form-name">Password</label>
					<div class="row">
						<div class="col-11">
						<input type="password" class="form-control frm-width" id="password" placeholder="Password"  onChange={e => setPassword(e.target.value)}name='password'/>
						</div>
						<div class="col-1">
						<i class="fa fa-lock white-color"></i>
						</div>
					</div>
				
				</div>
				
				
				<div class="form-group">
					<button type="submit" class="btn  btn-style">Log in</button>
				</div>
           
            
				<div class="form-group pt-3 text-center">
				
			</div>
          </form>
			
		</div>
		<div className="screen__background">
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
    </div>
  )
}
