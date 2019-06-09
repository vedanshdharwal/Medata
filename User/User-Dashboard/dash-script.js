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

  

  var user = firebase.auth().currentUser;
  if(user!=null){
   // var username = user.username
   // document.getElementById("dash").innerHTML = "welcome user: "+username;
   window.alert(user.username);
  }

  function logout(){
    firebase.auth().signOut();
  }


// Get a reference to the database service
var database = firebase.database();