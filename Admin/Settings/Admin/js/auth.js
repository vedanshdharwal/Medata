function myFunction(){
  //var userUID = document.getElementById('userUID').value;

  // listen for auth status changes
auth.onAuthStateChanged(user => {
  if(user){
   
    //getting data
  db.collection("Admin Details").get().then(snapshot => {
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
}

function editForm(){
  var formElements = document.querySelector("#signup-form").elements;
  var placeholder = document.querySelector("#uid").placeholder;
  db.collection("Admin Details").get().then(snapshot => {
    snapshot.docs.forEach(doc =>{
     const guide = doc.data();
     if(placeholder == guide.uid){
      for (i = 0; i < formElements.length; i++) {
        var text = formElements[i].value;
        var attribute = formElements[i].id;
     if(text.length>0){
       console.log(attribute,text);
       db.collection("Admin Details").doc(doc.id)
    .update({
      [attribute] : text ,
    }); 
     }
     }

     
      
 }
 });
 });



}
  