

const search = document.querySelector("#search");
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
    db.collection("User Details").get().then(snapshot => {
      console.log(snapshot.docs);
    setupGuides(snapshot.docs);
   // setupUI(user);

  // console.log(guideList);
   window.open("../Search Patient/PatientProfile.html");


  });
}else {
    // console.log("user logged out");
    //setupUI();
    setupGuides([]);
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
