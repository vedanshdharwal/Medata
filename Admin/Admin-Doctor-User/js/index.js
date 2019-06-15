const wrapper = document.querySelectorAll('.wrapper')
auth.onAuthStateChanged(user => {
    if(user){
        wrapper.forEach(item => item.style.display = 'block');
  
    }
    else {
      console.log("user logged out");
    }
});
//logout
const logout = document.querySelector("#logout-button");
logout.addEventListener('click', (e) =>{
    e.preventDefault();
    auth.signOut().then(() => {
        console.log("user signed out")
        window.open("../Login Page - Admin/Admin Login.html","_top");
    });
});