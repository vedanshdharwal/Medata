
const guideList = document.querySelector('.container');
const loggedOutLinks = document.querySelectorAll('.loggedOut');
const loggedInLinks = document.querySelectorAll('.loggedIn');



 const setupUI = (user) => {
    if (user) {
        //toggle UI Elements
        loggedOutLinks.forEach(item => item.style.display = 'none');
        loggedInLinks.forEach(item => item.style.display = 'block');
    } else{
        //toggle UI elements
        loggedOutLinks.forEach(item => item.style.display = 'block');
        loggedInLinks.forEach(item => item.style.display = 'none');
    }
} 

/* function renderData(doc){
    let div = document.createElement('div');
    let firstname = document.createElement('li');
    let lastname = document.createElement('li');
    let dob = document.createElement('li');
    let gender = document.createElement('li');
    let qualification = document.createElement('li');
    let experience = document.createElement('li');
    let uid = document.createElement('li');
    let email = document.createElement('li');
    let contactnumber = document.createElement('li');
    let emergencycontactnumber = document.createElement('li');
    let caddress = document.createElement('li');
    let paddress = document.createElement('li');

    div.setAttribute('data-id', doc.id);
    firstname.textContent = doc.data().firstname;
    lastname.textContent = doc.data().lastname;
    dob.textContent = doc.data().dob;
    gender.textContent = doc.data().gender;
    qualification.textContent = doc.data().qualification;
    experience.textContent = doc.data().experience;
    uid.textContent = doc.data().uid;
    email.textContent = doc.data().email;
    contactnumber.textContent = doc.data().contactnumber;
    emergencycontactnumber.textContent = doc.data().emergencycontactnumber;
    caddress.textContent = doc.data().caddress;
    paddress.textContent = doc.data().paddress;

    div.appendChild(firstname);
    div.appendChild(lastname);
    div.appendChild(dob);
    div.appendChild(gender);
    div.appendChild(qualification);
    div.appendChild(experience);
    div.appendChild(uid);
    div.appendChild(email);
    div.appendChild(contactnumber);
    div.appendChild(emergencycontactnumber);
    div.appendChild(caddress);
    div.appendChild(paddress);

    guideList.appendChild(div);
} */

//setup guides
const setupGuides = (data,user) => {

if(data.length){

    let html = '';
    data.forEach(doc => {
        const guide = doc.data();
        console.log(guide.email);
        console.log("hi: hi : ",user.email);
        if(user.email == guide.email){
           // renderData(doc);


            const li = `
        
        


	<div class="card-container">
    <link rel="stylesheet" type="text/css" href="style.css">
		<div class="upper-container">
			<div class="image-container">
				<img src="profile.jpg" />
			</div>
		</div>

		<div class="lower-container">
			<div>
				<h3></h3>
				<h2>${guide.firstname}
             ${guide.lastname}</h2>
			</div>
            <div>
                <table align="center">
                <tr>
                <td><b>Date of Birth</b>: ${guide.dob}</td>
                <td><b>Email</b>: ${guide.email}</td>
                </tr>
                <tr>
                <td><b>Gender</b>: ${guide.gender}</td>
                <td><b>Contact Number</b>: ${guide.contactnumber}</td>
                </tr>
                <tr>
                <td><b>Qualification</b>: ${guide.qualification}</td>
                <td><b>Emergency Contact Number</b>: ${guide.emergencycontactnumber}</td>
                </tr>
                <tr>
                <td><b>Experience</b>: ${guide.experience} </td>
                <td><b>Current Address</b>: ${guide.caddress}</td>
                </tr>
                <tr>
                <td><b>UID</b>: ${guide.uid}</td>
                <td><b>Permanent Address</b>: ${guide.paddress}</td>
                </tr>
                 <!--photo to be added-->
                <br>
                </table>
                
			</div>
			<div class="buttons">
				<button type = "button" class="btn">View profile</button>
                <button type="button" onclick='myFunction()' class="btn loggedIn" id="logout1"> Logout! </button>
			</div>
		</div>

	</div>
   
       `;
       html = html +li;
       
        }
      // `` backticks are used to create template string.... use html in it
      // style this html later on with css to show user info
    });

    guideList.innerHTML = html;

}   else{
        // else part
    
}
}

{/* <tr><br></tr>
<tr><br></tr>
<tr><br></tr>
<tr> <br></tr>
<tr><br></tr>
<tr><br></tr>
<tr><br></tr>
<tr><br></tr> */}