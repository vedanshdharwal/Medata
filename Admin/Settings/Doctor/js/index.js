

const guideList = document.querySelector('.Pcontainer');



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
	var UID= document.getElementById('doctorUID').value;
	if(data.length){
	
		let html = '';
		data.forEach(doc => {
			const guide = doc.data();
			console.log(guide.email);
			console.log("hi: hi : ",user.email);
			if(UID == guide.uid){
			   // renderData(doc);
				const li = `
				<link rel="stylesheet" href="css/style.css">
				<div class="wrapper">
				<div class="container">
				<br></br><br></br><br></br><br></br>
			
				<b><h1> User Registration</h1></b>
				
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
			
			Qualification<br>
					<input type="number" placeholder=${guide.qualification} name="qualification" id="qualification"><br>

			Experience<br>
					<input type="number" placeholder=${guide.experience} name="experience" id="experience"><br>

			
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
	var storageRef = firebase.storage().ref('doctorPhotos/'+ file.name);

	//upload file
	var task = storageRef.put(file);


});










/*
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCsGf8Unv5NVpKA8ixaH1xneeGPDRmWhzw",
    authDomain: "medata-73b29.firebaseapp.com",
    databaseURL: "https://medata-73b29.firebaseio.com",
    projectId: "medata-73b29",
    storageBucket: "medata-73b29.appspot.com",
    messagingSenderId: "554889395801",
    appId: "1:554889395801:web:a25249d79f5e7854"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //Reference messages collection
  var messagesRef = firebase.database().ref('userRegistration/');
 
 
  //document.getElementById('contactForm').addEventListener('submit',submitForm);
  
  var el = document.getElementById('contactForm');
  if (el) {
	el.addEventListener('submit', submitForm);
  }
  
   function submitForm(event){
	event.preventDefault();
	 
	// $('form').fadeOut(500);
	// $('.wrapper').addClass('form-success');
	var firstname = getInputVal('firstname');
	var lastname = getInputVal('lastname');
	var dob = getInputVal('dob');
	var gender = getInputVal('gender');
	var bloodGroup = getInputVal('bloodGroup');
	var height = getInputVal('height');
	var weight = getInputVal('weight');
	var health = getInputVal('health');
	var allergy = getInputVal('allergy');
	var uid = getInputVal('uid');
	var email = getInputVal('email');
	var password = getInputVal('password');
	var rePassword = getInputVal('rePassword');
	var contactnumber = getInputVal('contactnumber');
	var emergencycontactnumber = getInputVal('emergencycontactnumber');
	var caddress = getInputVal('caddress');
	var paddress = getInputVal('paddress');

	//save message
	saveMessage(firstname,lastname,dob,gender,bloodGroup,height,weight,health,allergy,uid,email,password,rePassword,contactnumber,emergencycontactnumber,caddress,paddress);

	//show alert
    document.querySelector('.alert').style.display = 'block';
       
    //hide alert after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },3000);
       
       $('.alert').fadeOut(3000);
       
       //clear form
       document.getElementById('contactForm').reset();

   }
	

function getInputVal(id){
	//if (document.getElementById(id)!=null){
	//	console.log(1234);
		return document.getElementById(id).value;
		
//	}
	
}



//save message to firebase
function saveMessage(fname,lname,dob,gender,bloodGroup,height,weight,health,allergy,uid,email,password,rePassword,contactnumber,emergencycontactnumber,caddress,paddress){
	var newMessageRef = messagesRef.push();
	newMessageRef.set({
		fname : fname, 
		lname : lname,
		dob : dob,
		gender : gender,
		bloodGroup : bloodGroup,
		height : height,
		weight : weight,
		health : health,
		allergy : allergy,
		uid : uid,
		email : email,
		password : password,
		rePassword : rePassword,
		contactnumber : contactnumber,
		emergencycontactnumber : emergencycontactnumber,
		caddress : caddress,
		paddress : paddress
	});
}


var playersRef = firebase.database().ref("userRegistration/");

playersRef.on("child_added", function(data, prevChildKey) {
   var newPlayer = data.val();
   console.log("fname: " + newPlayer.fname);
   console.log("lname: " + newPlayer.lname);
   console.log("gender: " + newPlayer.gender);
   console.log("Previous Player: " + prevChildKey);
});



 fname : form.fname.value, 
		lname : form.lname.value,
		dob : form.dob.value,
		gender : form.gender.value,
		bloodGroup : form.bloodGroup.value,
		height : form.height.value,
		weight : form.weight.value,
		health : form.health.value,
		allergy : form.allergy.value,
		uid : form.uid.value,
		email : form.email.value,
		password : form.password.value,
		rePassword : form.rePassword.value,
		contactnumber : form.contactnumber.value,
		emergencycontactnumber : form.emergencycontactnumber.value,
		caddress : form.caddress.value,
		paddress : form.paddress.value

*/