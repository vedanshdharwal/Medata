const form = document.querySelector('#signup-form');
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

//saving data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('Doctor Details').add({
		firstname : form.firstname.value,
		lastname : form.lastname.value,
		dob : form.dob.value,
		gender : form.gender.value,
		qualification : form.qualification.value,
		experience : form.experience.value,
		uid : form.uid.value,
		email : form.email.value,
		password : form.password.value,
		rePassword : form.rePassword.value,
		contactnumber : form.contactnumber.value,
		emergencycontactnumber : form.emergencycontactnumber.value,
		caddress : form.caddress.value,
		paddress : form.paddress.value,
		userType : form.userType.value
    });
	//form.reset();
	console.log("details submitted");
});













