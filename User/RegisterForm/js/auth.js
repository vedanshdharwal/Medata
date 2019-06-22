//To hide-show password
function showPassword() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  //form validation
  $('#password, #rePassword').on('keyup', function () {
    if ($('#password').val() == $('#rePassword').val()) {
      $('#message').html('Matching').css('color', 'green');
    } else 
      $('#message').html('Not Matching').css('color', 'red');
  });

//signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
   // console.log("idhar aa gya");

   
    if ($('#password').val() != $('#rePassword').val()) {
      alert('Passwords do not match ');
    } else if($('#password').val().length < 6){
        alert('Password length must be atleast 6 characters')
    } else{


    //get user info
    const email = signupForm['email'].value;
    const password = signupForm['password'].value;
    //in the brackets are the ids
    console.log(email,password);

   auth.createUserWithEmailAndPassword(email,password).then(cred =>{
      return db.collection('User Details').doc(cred.user.uid).set({
        firstname : signupForm.firstname.value,
		lastname : signupForm.lastname.value,
		dob : signupForm.dob.value,
        gender : signupForm.gender.value,
        bloodGroup : signupForm.bloodGroup.value,
		height : signupForm.height.value,
		weight : signupForm.weight.value,
		health : signupForm.health.value,
		allergy : signupForm.allergy.value,
		uid : signupForm.uid.value,
		email : signupForm.email.value,
		password : signupForm.password.value,
		rePassword : signupForm.rePassword.value,
		contactnumber : signupForm.contactnumber.value,
		emergencycontactnumber : signupForm.emergencycontactnumber.value,
		caddress : signupForm.caddress.value,
		paddress : signupForm.paddress.value,
        userType : signupForm.userType.value,
        date : Date()
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

   }).catch ((error) =>{
    alert('Error - ' + error.message);
  });
    }
});

