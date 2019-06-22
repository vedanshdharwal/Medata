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
  

//logout
function myFunction(){
  auth.signOut().then(() => {
    console.log("user signed out")
});
}




