// listen for auth status changes
auth.onAuthStateChanged(user => {
  if(user){
    console.log("user logged in: ", user);
  }
  else {
    console.log("user logged out");
  }
});
  
  
  // logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut().then(() => {
    console.log('user signed out');
  })
});