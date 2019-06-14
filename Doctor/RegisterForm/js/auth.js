//signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("idhar aa gya");
    //get user info
    const email = signupForm['email'].value;
    const password = signupForm['password'].value;
    //in the brackets are the ids
    console.log(email,password);

   auth.createUserWithEmailAndPassword(email,password).then(cred =>{
      return db.collection('Admin Details').doc(cred.user.uid).set({
        firstname : signupForm.firstname.value,
		lastname : signupForm.lastname.value,
		dob : signupForm.dob.value,
        gender : signupForm.gender.value,
        qualification : signupForm.qualification.value,
		experience : signupForm.experience.value,
		uid : signupForm.uid.value,
		email : signupForm.email.value,
		password : signupForm.password.value,
		rePassword : signupForm.rePassword.value,
		contactnumber : signupForm.contactnumber.value,
		emergencycontactnumber : signupForm.emergencycontactnumber.value,
		caddress : signupForm.caddress.value,
		paddress : signupForm.paddress.value,
		userType : signupForm.userType.value
      });
    
   }).then(() =>{
    console.log("account created");
    signupForm.reset();
    
    //show alert
 document.querySelector('.alert').style.display = 'block';
    
 //hide alert after 3 seconds
 setTimeout(function(){
     document.querySelector('.alert').style.display = 'none';
 },5000);
    
    $('.alert').fadeOut(3000);
    location.reload();
    //redirect to login page

   });

});

