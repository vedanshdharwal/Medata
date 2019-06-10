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
       //redirect to login page
   });

});

