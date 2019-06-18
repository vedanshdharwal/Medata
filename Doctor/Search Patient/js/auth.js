

const search = document.querySelector("#search");
const lastUpdate = document.getElementById('lastUpdate').innerHTML;


console.log("hi");
//const patientUID = document.getElementsByClassName('form')[0].value;
/* auth.onAuthStateChanged(user => {
  if(user){
    console.log("user logged in: ", user.email);
    console.log("user name is: ", user.firstname);
    console.log(auth.currentUser);
    //searching user 
    db.collection("User Details").get().then(snapshot => {
      console.log(snapshot.docs);
      search.addEventListener('submit',(e)=>{
        e.preventDefault();
        console.log("hi inside"); 
        setupGuides(snapshot.docs);
    });
    });
} */
search.addEventListener('click', (e) =>{
    e.preventDefault();
//alert("user uid value is: ",patientUID);
    console.log("hi");
    // allow to search only if doctor is logged in
auth.onAuthStateChanged(user => {
    if(user){
      //getting data
    db.collection("User Details").onSnapshot(snapshot => {
      console.log(snapshot.docs);
    setupGuides(snapshot.docs);
    setupUI(user);
  });

}else {
    // console.log("user logged out");
    //setupUI();
    setupGuides([]);
    setupUI();
    }
  });


});

/* function patpro(){
  db.collection("User Details").get().then(snapshot => {
  console.log(snapshot.docs);
  setupGuides(snapshot.docs);
   */
  // allow to search only if doctor is logged in
//auth.onAuthStateChanged(user => {
 // if(user){
    
    //getting data
  
 // setupUI(user);
//});
//}else {
  // console.log("user logged out");
  //setupUI();
  //setupGuides([]);
 // }
//});
//window.open("../Search Patient/PatientProfile.html");
//});



     // updating user details
  function updateData(){
  
    
        var str = document.querySelector("#log-in > div > div.lower-container > div:nth-child(2) > table > tbody > tr:nth-child(5) > td:nth-child(1)").innerText.substring(5);
         var height = document.getElementById('newHeight').value;
        var weight = document.getElementById('newWeight').value;
        var analysis = document.getElementById('analysis').value;

        db.collection("User Details").get().then(snapshot => {
          snapshot.docs.forEach(doc =>{
           const guide = doc.data();
           if(str == guide.uid){
           db.collection("User Details").doc(doc.id)
           .update({
               height: height,
               weight: weight,
               analysis : analysis,
           date : Date()
           });
           lastUpdate.innerHTML += ` ${guide.date}`;
       }
       });
       });
      
     
}