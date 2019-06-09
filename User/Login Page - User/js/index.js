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

const auth = firebase.auth();

var user = firebase.auth().currentUser;

 auth.onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
   // window.location = "../User-Dashboard/dashboard.html";
   console.log("hi");
  } else {
    // No user is signed in.
     
  }
});

function login(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    
    auth.signInWithEmailAndPassword(username, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
            window.alert(errorMessage);

});
    //window.alert("welcome "+username);
    window.open("../User-Dashboard/dashboard.html");
}
