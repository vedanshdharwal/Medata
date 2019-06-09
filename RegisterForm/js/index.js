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

  //Reference messages collection
  var messagesRef = firebase.database().ref('userRegistration/');
 
 
  //document.getElementById('contactForm').addEventListener('submit',submitForm);
  
  var el = document.getElementById('contactForm');
  if (el) {
	el.addEventListener('submit', submitForm);
  }
  
   function submitForm(event){
	event.preventDefault();
	 
	// $('form').fadeOut(500);
	// $('.wrapper').addClass('form-success');
	var firstname = getInputVal('firstname');
	var lastname = getInputVal('lastname');
	var dob = getInputVal('dob');
	var gender = getInputVal('gender');
	var bloodGroup = getInputVal('bloodGroup');
	var height = getInputVal('height');
	var weight = getInputVal('weight');
	var health = getInputVal('health');
	var allergy = getInputVal('allergy');
	var uid = getInputVal('uid');
	var email = getInputVal('email');
	var password = getInputVal('password');
	var rePassword = getInputVal('rePassword');
	var contactnumber = getInputVal('contactnumber');
	var emergencycontactnumber = getInputVal('emergencycontactnumber');
	var caddress = getInputVal('caddress');
	var paddress = getInputVal('paddress');

	//save message
	saveMessage(firstname,lastname,dob,gender,bloodGroup,height,weight,health,allergy,uid,email,password,rePassword,contactnumber,emergencycontactnumber,caddress,paddress);

	//show alert
    document.querySelector('.alert').style.display = 'block';
       
    //hide alert after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },3000);
       
       $('.alert').fadeOut(3000);
       
       //clear form
       document.getElementById('contactForm').reset();

   }
	

function getInputVal(id){
	//if (document.getElementById(id)!=null){
	//	console.log(1234);
		return document.getElementById(id).value;
		
//	}
	
}



//save message to firebase
function saveMessage(fname,lname,dob,gender,bloodGroup,height,weight,health,allergy,uid,email,password,rePassword,contactnumber,emergencycontactnumber,caddress,paddress){
	var newMessageRef = messagesRef.push();
	newMessageRef.set({
		fname : fname, 
		lname : lname,
		dob : dob,
		gender : gender,
		bloodGroup : bloodGroup,
		height : height,
		weight : weight,
		health : health,
		allergy : allergy,
		uid : uid,
		email : email,
		password : password,
		rePassword : rePassword,
		contactnumber : contactnumber,
		emergencycontactnumber : emergencycontactnumber,
		caddress : caddress,
		paddress : paddress
	});
}


var playersRef = firebase.database().ref("userRegistration/");

playersRef.on("child_added", function(data, prevChildKey) {
   var newPlayer = data.val();
   console.log("fname: " + newPlayer.fname);
   console.log("lname: " + newPlayer.lname);
   console.log("gender: " + newPlayer.gender);
   console.log("Previous Player: " + prevChildKey);
});