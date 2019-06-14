
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

//setup guides
const setupGuides = (data,user) => {

if(data.length){

    let html = '';
    data.forEach(doc => {
        const guide = doc.data();
        
        console.log(guide.email);
        console.log("hi: hi : ",user.email);
        if(user.email == guide.email){
           guideList.innerHTML = `
        
        <!DOCTYPE html>
<html>
<head>
	<title>Profile Card</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>

<body>

	<div class="card-container">

		<div class="upper-container">
			<div class="image-container">
            <img src="photoURL" id="dp"  />
			</div>
		</div>
		<div class="lower-container">
			<div>
				<h3></h3>
				<h4>${guide.firstname}
             ${guide.lastname}</h4>
			</div>
			<div>
				<li>Date of Birth: ${guide.dob}<br></li>
                <li>Gender: ${guide.gender}<br></li>
                <li>Blood Group: ${guide.bloodGroup}<br></li>
                <li>Height: ${guide.height} cm<br></li>
                <li>Weight: ${guide.weight} kgs<br></li>
                <li>Birth Defects / Serious Health Issue: ${guide.health}<br></li>
                <li>Allergy: ${guide.allergy}<br></li>
                <li>UID: ${guide.uid}<br></li>
                <li> Email: ${guide.email}<br></li>
                <li>Contact Number: ${guide.contactnumber}<br></li>
                <li>Emergency Contact Number: ${guide.emergencycontactnumber}<br></li>
                <li>Current Address: ${guide.caddress}<br></li>
                <li>Permanent Address: ${guide.paddress}<br></li>
                 <!--photo to be added-->
                <br>
            </div>
            <div>
            <button type ="button" class = "btn" id="changeDP">Set DP</button>
                <button type="submit" class="btn" id="logout"> logout!</button>
			</div>
		</div>

	</div>
            
</body>
</html>     
       `;
      // html = html +li;
       
        }
      // `` backticks are used to create template string.... use html in it
      // style this html later on with css to show user info
    });
   // guideList.innerHTML = html;
}   else{
        // else part
    
}
}
