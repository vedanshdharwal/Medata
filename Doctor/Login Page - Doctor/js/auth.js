//login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //get user info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;
    //in the brackets are the ids
   // console.log(email,password);

   auth.signInWithEmailAndPassword(email,password).then(cred =>{
       console.log(cred.user);

       loginForm.reset();
       //redirect to Myprofile page
       window.open("../Select Profile/MyProfile.html","_top");
   });

});
