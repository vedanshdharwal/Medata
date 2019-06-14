// listen for auth status changes
auth.onAuthStateChanged(user => {
  if(user){
    console.log("user logged in: ", user.email);
    console.log("user logged in: ", user.uid);
    console.log(auth.currentUser);
    /* user.forEach(item => {
      const uidGrabber = document.querySelectorAll('li.container');
      console.log("user logged in: ", uidGrabber[8].innerHTML);
    }); */
    
    //getting data
  db.collection("User Details").get().then(snapshot => {
    console.log(snapshot.docs);
  setupGuides(snapshot.docs,user);
  setupUI(user);
});

 /* const docRef = db.collection("User Details");
 docRef.get().then(snapshot => {
   console.log(snapshot.docs);
  setupGuides(snapshot);
  setupUI(user);
}).catch(function (error){
  console.log("got error: ",error);
})
; */
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
