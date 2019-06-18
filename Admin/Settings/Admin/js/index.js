

const guideList = document.querySelector('.Pcontainer');
const loggedOutLinks = document.querySelectorAll('.loggedOut');
const loggedInLinks = document.querySelectorAll('.loggedIn');


 const setupUI = (user) => {
    if (user) {
        //toggle UI Elements
        loggedOutLinks.forEach(item => item.style.display = 'none');
        loggedInLinks.forEach(item => item.style.display = 'block');
    } else{
        //toggle UI elements
        loggedOutLinks.forEach(item => item.style.display = 'block');
        loggedInLinks.forEach(item => item.style.display = 'none');
    }
} 




//setup guides
const setupGuides = (data,user) => {
	var UID= document.getElementById('adminUID').value;
	if(data.length){
	
		let html = '';
		data.forEach(doc => {
			const guide = doc.data();
			/* console.log(guide.email);
			console.log("hi: hi : ",user.email); */
			if(UID == guide.uid){
				
				const li = `
				<link rel="stylesheet" href="css/style.css">
				<div class="wrapper">
				<div class="container">
				<br></br><br></br><br></br><br></br>
			
				<b><h1> Edit Details </h1></b>
				
				<!-- Form Validation-->
					<form class="add-user" id="signup-form">
				
					First name<br>
					<input type="text" placeholder=${guide.firstname} name="firstname" id="firstname" ><br>
					
					Last name<br>
					<input type="text" placeholder=${guide.lastname} name="lastname" id="lastname"><br>
					
					Date of Birth<input type="date" placeholder=${guide.dob} name="dob" id="dob"><br>
					
					Gender : 
			<select name="Gender" id="gender">
			  <option value="Male">Male</option>
			  <option value="Female">Female</option>
			  <option value="Other">Other</option>
			</select> <br></br>
			
				
			UID<br>
					<input type="text" placeholder=${guide.uid} name="uid" id="uid"><br>
			Email<br>
			<input type="email" placeholder=${guide.email} name="email" id="email"><br>	
			
			Password<br>
			<input type="password" placeholder='********' name="password" id="password"><br>
			
			Retype Password<br>
			<input type="password" placeholder='********' name="rePassword" id="rePassword"><br>
			
			Contact Number<br>
					<input type="number" placeholder=${guide.contactnumber} name="contactnumber" id="contactnumber"><br>
			
			Emergency Contact Number<br>
					<input type="number" placeholder=${guide.emergencycontactnumber} name="emergencycontactnumber" id="emergencycontactnumber"><br>
			
			Current Address<br>		
			<textarea name="caddress" placeholder=${guide.caddress} id="caddress" cols="40" rows="7"></textarea><br></br>
			
			Permanent Address<br>		
			<textarea name="paddress" placeholder=${guide.paddress} id="paddress" cols="40" rows="7"></textarea><br></br>
					
			User Profile Picture
			  <input type="file" accept="image/*;capture=camera" value="upload" id="fileButton"><br></br>
				
			User Type<br>
			<input type="text" placeholder="User" id="userType" value="User" disabled><br></br>
						<button type="button" onclick="editForm()" id="login-button">Submit</button>
					</form>
				
				</div>
				
				
				<ul class="bg-bubbles">
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					
				</ul>
			</div>
				
				
				
		   `;
		   html = html +li;
		   
			}
		  // `` backticks are used to create template string.... use html in it
		  // style this html later on with css to show user info
		});
	
		guideList.innerHTML = html;
	
	}   else{
			// else part
		
	}
	}

const fileButton = document.querySelector("#fileButton");

//listen for file selection
fileButton.addEventListener('change',function(e){
	//Get file
	var file = e.target.files[0];

	//create a storage ref to upload the file
	var storageRef = firebase.storage().ref('adminPhotos/'+ file.name);

	//upload file
	var task = storageRef.put(file);


});










