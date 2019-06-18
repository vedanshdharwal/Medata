//search uid
/* const userUID = document.querySelector('#search-form');
const patientUID = userUID['patient-uid'].value;
alert("user uid value is: ",patientUID); */

const guideList = document.querySelector('.container');
const middleContainer = document.querySelectorAll('.middle_container');
const wrapper = document.querySelectorAll('.wrapper');
const form = document.querySelectorAll('#search-form');
const bubbles = document.querySelectorAll('.bg-bubbles');


const setupUI = (user) => {
    if (user) {
        //toggle UI Elements
        form.forEach(item => item.style.display = 'none');
        wrapper.forEach(item => item.style.display = 'none');
        bubbles.forEach(item => item.style.display = 'none');
        middleContainer.forEach(item => item.style.display ='grid');
    } else{
        //toggle UI elements
        document.write(`<h3>Login To Continue</h3>
                       <button><a href="../Login Page - Doctor/Doctor Login.html">Log-in</a></button>     
        `);
    }
} 

/* function renderData(doc){
    
    

    let div = document.createElement('div');
    let firstname = document.createElement('li');
    let lastname = document.createElement('li');
    let dob = document.createElement('li');
    let gender = document.createElement('li');
    let uid = document.createElement('li');
    let email = document.createElement('li');
    let contactnumber = document.createElement('li');
    let emergencycontactnumber = document.createElement('li');
    let caddress = document.createElement('li');
    let paddress = document.createElement('li');

    div.setAttribute('data-id', doc.id);
    firstname.textContent = `First Name : ` + doc.data().firstname;
    lastname.textContent = `Last Name : ` + doc.data().lastname;
    dob.textContent = `Date Of Birth : ` +doc.data().dob;
    gender.textContent = `Gender : ` +doc.data().gender;
    uid.textContent = `UID : ` +doc.data().uid;
    email.textContent = `Email : ` +doc.data().email;
    contactnumber.textContent = `Contact Number : ` +doc.data().contactnumber;
    emergencycontactnumber.textContent = `Emergency No. : ` +doc.data().emergencycontactnumber;
    caddress.textContent = `Current Address : ` +doc.data().caddress;
    paddress.textContent = `Permanent Address : ` +doc.data().paddress;

    div.appendChild(firstname);
    div.appendChild(lastname);
    div.appendChild(dob);
    div.appendChild(gender);
    div.appendChild(uid);
    div.appendChild(email);
    div.appendChild(contactnumber);
    div.appendChild(emergencycontactnumber);
    div.appendChild(caddress);
    div.appendChild(paddress);

    guideList.appendChild(div);
}
 */



// guideList.innerHTML = " ";

//setup guides
const setupGuides = (data) => {

    if(data.length){

        var html = '';
        data.forEach(doc => {
            const guide = doc.data();
           // console.log(document.getElementById('patient-uid').value);
           
            if(document.getElementById('patient-uid').value == guide.uid){
                //console(guide.data());

                 //renderData(doc);

              
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
                <table class="center">
                <tr>
                <td><b>Date of Birth</b>: ${guide.dob}</td>
                <td><b>Email</b>: ${guide.email}</td>
                </tr>
                <tr>
                <td><b>Gender</b>: ${guide.gender}</td>
                <td><b>Contact Number</b>: ${guide.contactnumber}</td>
                </tr>
                <tr>
                <td><b>Height</b>: ${guide.height} cm</td>
                <td><b>Emergency Contact Number</b>: ${guide.emergencycontactnumber}</td>
                </tr>
                <tr>
                <td><b>Weight</b>: ${guide.weight} kg</td>
                <td><b>Current Address</b>: ${guide.caddress}</td>
                </tr>
                <tr>
                <td><b>UID</b>: ${guide.uid}</td>
                <td><b>Permanent Address</b>: ${guide.paddress}</td>
                </tr>
                <tr>
                <td><b>Allergy</b>: ${guide.allergy}</td>
                <td><b>Blood Group</b>: ${guide.bloodGroup}</td>
                </tr>
                 <!--photo to be added-->
                <br>
                </table>
                
			</div>
		</div>

	</div>
           `;
           html += li ; 
          document.getElementById("lastUpdate").innerHTML = `${guide.date}`;
            }
          // `` backticks are used to create template string.... use html in it
          // style this html later on with css to show user info
        });
    

        guideList.innerHTML = html;
       // console.log(guideList.innerHTML);
        
      //  $('#namesa').append(guide.firstname);
    }   else{
            // else part
        
    }
    }
    