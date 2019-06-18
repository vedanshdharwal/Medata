function myFunction(){
  //var userUID = document.getElementById('userUID').value;

  // listen for auth status changes
auth.onAuthStateChanged(user => {
  if(user){
   
    
    //getting data
  db.collection("User Details").get().then(snapshot => {
    console.log(snapshot.docs);
  setupGuides(snapshot.docs,user);
  setupUI(user);
});

  }
  else {
   // console.log("user logged out");
   setupUI();
    setupGuides([]);
  }
});
}

function editForm(){
  var formElements = document.querySelector("#signup-form").elements;
  var placeholder = document.querySelector("#uid").placeholder;
  db.collection("User Details").get().then(snapshot => {
    snapshot.docs.forEach(doc =>{
     const guide = doc.data();
     if(placeholder == guide.uid){
      for (i = 0; i < formElements.length; i++) {
        var text = formElements[i].value;
        var attribute = formElements[i].id;
     if(text.length>0){
       console.log(attribute,text);
       db.collection("User Details").doc(doc.id)
    .update({
      [attribute] : text ,
    }); 
     }
     }

     
      
 }
 });
 });



}
  /*
  <div class="wrapper">
	<div class="container">
	<br></br><br></br><br></br><br></br>

    <b><h1> User Registration</h1></b>
    <div class="alert">Your details has been submitted!!!</div>
    <!-- Form Validation-->
		<form class="add-user" id="signup-form">
	
        First name<br>
        <input type="text" name="firstname" id="firstname" ><br>
        
		Last name<br>
        <input type="text" name="lastname" id="lastname"><br>
		
		Date of Birth<input type="date" name="dob" id="dob"><br>
		
		Gender : 
<select name="Gender" id="gender">
  <option value="Male">Male</option>
  <option value="Female">Female</option>
  <option value="Other">Other</option>
</select> <br></br>

	Blood Group : 
<select name="BloodGroup" id="bloodGroup">
  <option value="on">O-</option>
  <option value="op">O+</option>
    <option value="an">A-</option>
  <option value="ap">A+</option>
    <option value="bn">B-</option>
  <option value="bp">B+</option>
    <option value="abn">AB-</option>
  <option value="abp">AB+</option>
</select> <br></br>

Height [in cms]<br>
        <input type="number" name="height" id="height"><br>
		
Weight [in Kgs]<br>
<input type="number" name="weight" id="weight"><br>
		
Birth Defects / Serious Health Issue <br>		
<textarea name="health" cols="30" rows="5" id="health"></textarea>	<br></br>		

Allergy  [if any]<br>		
<textarea name="allergy" cols="30" rows="5" id="allergy"></textarea>	<br></br>

UID<br>
        <input type="text" name="uid" id="uid"><br>
Email<br>
<input type="email" name="email" id="email"><br>	

Password<br>
<input type="password" name="password" id="password"><br>

Retype Password<br>
<input type="password" name="rePassword" id="rePassword"><br>

Contact Number<br>
        <input type="number" name="contactnumber" id="contactnumber"><br>

Emergency Contact Number<br>
        <input type="number" name="emergencycontactnumber" id="emergencycontactnumber"><br>

Current Address<br>		
<textarea name="caddress" id="caddress" cols="40" rows="7"></textarea><br></br>

Permanent Address<br>		
<textarea name="paddress" id="paddress" cols="40" rows="7"></textarea><br></br>
		
User Profile Picture
  <input type="file" accept="image/*;capture=camera" value="upload" id="fileButton"><br></br>
    
User Type<br>
<input type="text" placeholder="User" id="userType" value="User" disabled><br></br>
			<button type="submit" id="login-button">Submit</button>
		</form>
    
	</div>
	
	
	<ul class="bg-bubbles">
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		
	</ul>
</div>

*/