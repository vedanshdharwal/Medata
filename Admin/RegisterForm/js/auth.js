//signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //get user info
    const email = signupForm['email'].value;
    const password = signupForm['password'].value;
    //in the brackets are the ids
   // console.log(email,password);

   auth.createUserWithEmailAndPassword(email,password).then(cred =>{
       console.log(cred);
    console.log("account created");
       signupForm.reset();
       
       //show alert
    document.querySelector('.alert').style.display = 'block';
       
    //hide alert after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },3000);
       
       $('.alert').fadeOut(3000);

       //redirect to login page
   });

});

