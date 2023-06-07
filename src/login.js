import React, { useState } from 'react';
import "./css/style.css";
import { useHistory } from 'react-router-dom';

export default function Login () {
   const [email, setemail] = useState("");
   const [password, setpassword] = useState("");
   const history = useHistory();

   function userName(event) {
      setemail(event.target.value)
      //alert(email)
   }
   function userPassword(event) {
      setpassword(event.target.value)
      //alert(password)
   }
   function submit (){
     if(email === 'admin' && password === 'admin'){
      history.push('/dashboard');
     }
   }
  return (
    <div>
        <div class="container">
	<div class="screen">
		<div class="screen__content">
			<form class="login">
				<div class="login__field">
					<i class="login__icon fas fa-user"></i>
					<input type="text" class="login__input" placeholder="User name / Email" onChange={userName} />
				</div>
				<div class="login__field">
					<i class="login__icon fas fa-lock"></i>
					<input type="password" class="login__input" placeholder="Password"  onChange={userPassword}/>
				</div>
				<button class="button login__submit" onClick={submit}>
					<span class="button__text">Log In Now</span>
					<i class="button__icon fas fa-chevron-right"></i>
				</button>				
			</form>
			
		</div>
		<div class="screen__background">
			<span class="screen__background__shape screen__background__shape4"></span>
			<span class="screen__background__shape screen__background__shape3"></span>		
			<span class="screen__background__shape screen__background__shape2"></span>
			<span class="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
    </div>
  )
}
