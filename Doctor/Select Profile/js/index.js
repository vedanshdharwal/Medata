$('#MyProfile-button').click(function(){
    console.log("redirecting to dashboard");
    window.open("../Doctor-Dashboard/dashboard.html");
});
auth.onAuthStateChanged(user => {
    if(user){
      console.log("user logged in: ", user.email);
      console.log("user logged in: ", user.uid);
      console.log(auth.currentUser);
    }
} );

$('#pat').click(function(){
    console.log("redirecting to search patient");
    window.open("../Search Patient/searchPatient.html");
});

//logout
const logout = document.querySelector("#logout-button");
logout.addEventListener('click', (e) =>{
    e.preventDefault();
    auth.signOut().then(() => {
        console.log("user signed out")
        window.open("../Login Page - Doctor/Doctor Login.html","_top");
    });
});