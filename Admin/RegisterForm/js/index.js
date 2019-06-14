const fileButton = document.querySelector("#fileButton");

//listen for file selection
fileButton.addEventListener('change',function(e){
	//Get file
	var file = e.target.files[0];

	//create a storage ref to upload the file
	var storageRef = firebase.storage().ref('adminPhotos/'+ file.name);

	//upload file
	var task = storageRef.put(file);

});