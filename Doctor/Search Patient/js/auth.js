

const search = document.querySelector("#search");
const lastUpdate = document.getElementById('lastUpdate').innerHTML;


console.log("hi");

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





     // updating user details
  function updateData(){
  
    
        var str = document.querySelector("#log-in > div > div.lower-container > div:nth-child(2) > table > tbody > tr:nth-child(5) > td:nth-child(1)").innerText.substring(5);
         var height = document.getElementById('height');
        var weight = document.getElementById('weight');
        var analysis = document.getElementById('analysis');
        var formElements = [height,weight,analysis];
        db.collection("User Details").get().then(snapshot => {
          snapshot.docs.forEach(doc =>{
           const guide = doc.data();
           if(str == guide.uid){
            for (i = 0; i < formElements.length; i++) {
              var text = formElements[i].value;
              var attribute = formElements[i].id;
           if(text.length>0){
             console.log(attribute,text);
             db.collection("User Details").doc(doc.id)
          .update({
            [attribute] : text ,
          }); 
           }
           }
           db.collection("User Details").doc(doc.id)
           .update({
           date : Date()
           });
           lastUpdate.innerHTML += ` ${guide.date}`;
       }
       });
       });
      
}