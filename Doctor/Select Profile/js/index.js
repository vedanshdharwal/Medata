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