function validate() {
	
	//return boolean
	let validated = false;

	//make sure email is correct structure
	let validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	
	if(!(document.forms["signup"]["email"].value.match(validEmail))){
		
		document.forms["signup"]["email"].classList.add("errorClass");
		var message = document.getElementById("emailMessage");
		message.innerText = "X enter correct email structure";		
	}

	//make sure username isnt empty
	let username = document.forms["signup"]["login"].value;
	
	if(username == ""){
		
		document.forms["signup"]["login"].classList.add("errorClass");
		var message = document.getElementById("loginMessage");
		message.innerText = "X must have a username";
	}
	
	//make sure username is less than 30 characters
	if(username.length >= 30){
 
		document.forms["signup"]["login"].classList.add("errorClass");
		var message = document.getElementById("loginMessage");
		message.innerText = "X username must be less than 30 characters"; 
	}
	
	//converting username to lowercase if username isnt empty and is less than 30 characters
	else {
		username.toLowerCase();
	}
	
	//make sure password is at least 8 characters
	let pass = document.forms["signup"]["pass"].value;
	
	if(pass.length < 8){

		document.forms["signup"]["pass"].classList.add("errorClass");
		var message = document.getElementById("passMessage");
		message.innerText = "X password must be at least 8 characters";

	}
	
	//make sure something is inside the re-type password textfield
	let pass2 = document.forms["signup"]["pass2"].value;
	
	if(pass2 == "") {
		document.forms["signup"]["pass2"].classList.add("errorClass");
		var message = document.getElementById("pass2Message");
		message.innerText = "X must re-enter password";
	}
	
	
	//make sure re-typed password matches original
	if(!(pass2.match(pass))){
		
		document.forms["signup"]["pass2"].classList.add("errorClass");
		var message = document.getElementById("pass2Message");
		message.innerText = "X passwords must match";		
	}  
	
	if((document.forms["signup"]["email"].value.match(validEmail)) && (username != "") && (username.length <= 30) && (pass.length >= 8) && (pass2 != "") && (pass2.match(pass))) {
		validated = true;
	}
	
	return validated;
}

//eventListeners to check for correct input
document.forms["signup"]["email"].addEventListener("input", checkEmail);

function checkEmail() {
	
	let validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	
	if((document.forms["signup"]["email"].value.match(validEmail))) {
		document.forms["signup"]["email"].classList.remove("errorClass");
		var message = document.getElementById("emailMessage");
		message.innerText = "";	
	}
}

//eventListener for username
document.forms["signup"]["login"].addEventListener("input", checkName);

function checkName() {
	
	let username = document.forms["signup"]["login"].value;
	
	if(username != ""){
		
		if(username.length >= 30) {
 
			var message = document.getElementById("loginMessage");
			message.innerText = "X username must be less than 30 characters"; 
			
		}
		else {
			document.forms["signup"]["login"].classList.remove("errorClass");
			var message = document.getElementById("loginMessage");
			message.innerText = "";
		}
	}	
}

//eventListener for password
document.forms["signup"]["pass"].addEventListener("input", checkPass);

function checkPass() {
	
	let pass = document.forms["signup"]["pass"].value;
	
	if(pass.length >= 8){

		document.forms["signup"]["pass"].classList.remove("errorClass");
		var message = document.getElementById("passMessage");
		message.innerText = "";

	}
}

//EventListener for retyped password
document.forms["signup"]["pass2"].addEventListener("input", checkPass2);

function checkPass2() {
	
	let pass = document.forms["signup"]["pass"].value;
	let pass2 = document.forms["signup"]["pass2"].value;
	
	if(pass2 != "") {

		if(!(pass2.match(pass))){			
			var message = document.getElementById("pass2Message");
			message.innerText = "X passwords must match";		
		} 
		else {	
			document.forms["signup"]["pass2"].classList.remove("errorClass");
			var message = document.getElementById("pass2Message");
			message.innerText = "";
		}
	}
}
