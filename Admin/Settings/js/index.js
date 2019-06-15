 $("#add-admin").click(function(event){
	event.preventDefault();
	window.open('../RegisterForm/AdminRegistration.html');
});

 $("#add-doctor").click(function(event){
	event.preventDefault();
	window.open('../../Doctor/RegisterForm/DoctorRegistration.html');
});

 $("#add-user").click(function(event){
	event.preventDefault();
	window.open('../../User/RegisterForm/UserRegistration.html');
});






function deleteUser(){
	
	var aadhar = document.getElementById('searchUID').value;
	db.collection("User Details").get().then(snapshot => {
		snapshot.docs.forEach(doc =>{
			 const guide = doc.data();
			 if(aadhar == guide.uid){
			 doc.ref.delete();
			alert(guide.firstname + " " +guide.lastname+  " details are deleted!!");

			}
	 });
	 });
}

