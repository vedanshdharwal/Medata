
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
            const li = `
       <li><br>
            Name: ${guide.firstname}
             ${guide.lastname}<br>
            Date of Birth: ${guide.dob}<br>
            Gender: ${guide.gender}<br>
            Blood Group: ${guide.bloodGroup}<br>
            Height: ${guide.height}<br>
            Weight: ${guide.weight}<br>
            Birth Defects / Serious Health Issue: ${guide.health}<br>
            Allergy: ${guide.allergy}<br>
            UID: ${guide.uid}<br>
            Email: ${guide.email}<br>
            Password: ${guide.password}<br> <!--do not show password later-->
            Retype Password: ${guide.rePassword}<br>
            Contact Number: ${guide.contactnumber}<br>
            Emergency Contact Number: ${guide.emergencycontactnumber}<br>
            Current Address: ${guide.caddress}<br>
            Permanent Address: ${guide.paddress}<br>   <!--photo to be added-->
        </li>    
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
