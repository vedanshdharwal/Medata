const uidGrabber = document.querySelectorAll('li.container');
// listen for auth status changes
auth.onAuthStateChanged(user => {
  if(user){
    console.log("user logged in: ", user.email);
    console.log("user logged in: ", user.uid);
    console.log(auth.currentUser);
    
    //getting data
  db.collection("Doctor Details").get().then(snapshot => {
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
const logout = document.querySelector("#logout");
logout.addEventListener('click', (e) =>{
    e.preventDefault();
    auth.signOut().then(() => {
        console.log("user signed out")
    });
});
/*
const logout = document.querySelector('#logout');
const viewProfile = document.querySelector('.btn');
viewProfile.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log('vedansh dharwal namaste');
});
logout.addEventListener('click', (e) =>{
  e.preventDefault();
  auth.signOut().then(() =>{
    console.log('user signed out');
  })
  window.location.reload();
});
*/
