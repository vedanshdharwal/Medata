
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
        
        

	<div class="card-container">
    <link rel="stylesheet" type="text/css" href="style.css">
		<div class="upper-container">
			<div class="image-container">
            <img src="photoURL" id="dp"  />
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
                <td><b>Blood Group</b>: ${guide.bloodGroup}</td>
                <td><b>Serious Health Issue</b>: ${guide.health}</td>
                </tr>
                <tr>
                <td><b>Allergy</b>: ${guide.allergy} </td>
                <td><b>Current Address</b>: ${guide.caddress}</td>
                </tr>
                <tr>
                <td><b>Height</b>: ${guide.height} cm</td>
                <td><b>Weight</b>: ${guide.weight} kgs</td>
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

{/* 
                <li>Gender: ${guide.gender}<br></li>
                <li>Blood Group: ${guide.bloodGroup}<br></li>
                <li>Height: ${guide.height} cm<br></li>
                <li>Weight: ${guide.weight} kgs<br></li>
                <li>Birth Defects / Serious Health Issue: ${guide.health}<br></li>
                <li>Allergy: ${guide.allergy}<br></li>
                */}