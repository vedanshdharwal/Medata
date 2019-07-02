const search = document.querySelector("#search");
const lastUpdate = document.getElementById("lastUpdate").innerHTML;

search.addEventListener("click", e => {
  e.preventDefault();
  //alert("user uid value is: ",patientUID);
  console.log("hi");
  // allow to search only if doctor is logged in
  auth.onAuthStateChanged(user => {
    if (user) {
      //getting data
      db.collection("User Details")
        .onSnapshot(snapshot => {
          let changes = snapshot.docChanges();
          console.log(changes);
          setupGuides(changes);
          setupUI(user);
          setupHistory();
        });
    } else {
      // console.log("user logged out");
      //setupUI();
      setupGuides([]);
      setupUI();
    }
  });
});





// updating user details
function updateData() {
  var str = document
    .querySelector(
      "#log-in > div > div.lower-container > div:nth-child(2) > table > tbody > tr:nth-child(5) > td:nth-child(1)"
    )
    .innerText.substring(5);
  console.log(str);
  var height = document.getElementById("height");
  var weight = document.getElementById("weight");
  // var analysis = document.getElementById('analysis');
  var formElements = [height, weight]; //,analysis
  db.collection("User Details")
    .get()
    .then(snapshot => {
      snapshot.docs.forEach(doc => {
        const guide = doc.data();
        if (str == guide.uid) {
          for (i = 0; i < formElements.length; i++) {
            var text = formElements[i].value;
            var attribute = formElements[i].id;
            if (text.length > 0) {
              console.log(attribute, text);
              db.collection("User Details")
                .doc(doc.id)
                .update({
                  [attribute]: text
                });
            }
          }
          db.collection("User Details")
            .doc(doc.id)
            .update({
              date: Date()
            });
          lastUpdate.innerHTML += ` ${guide.date}`;
        }
      });
    });

  //sub collection
  var morning = document.getElementById("morning");
  var noon = document.getElementById("noon");
  var evening = document.getElementById("evening");
  var analysis = document.getElementById('analysis')
  var time = [morning, noon, evening];
  var mediElements = document.querySelector("#medicines").elements;

  db.collection("User Details")
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        const guide = doc.data();
        if(str == guide.uid){  console.log('hi there!!!');

          if(analysis.value ||  morning.value || noon.value || evening.value ){
            console.log("Sub Document ID: ", doc.id);
        db.collection("User Details")
          .doc(doc.id)
          .collection("Prescription")
          .add({
            analysis: analysis.value,
            morning : morning.value ,
            noon : noon.value,
            evening : evening.value,
            date : Date()
          });
          }
          
          


        }
        
      });
    });























  /*   db.collection('User Details').doc(doc.id).collection("Prescription").get().then(snapshot => {
         snapshot.docs.forEach(doc =>{
          const guide = doc.data();
          var morning = document.getElementById('morning');
          var noon = document.getElementById('noon');
          var evening = document.getElementById('evening');
       var time = [morning,noon,evening]
       if(guide.uid==str){
     
         db.collection('User Details').doc(user.uid).collection('Prescription').add({
             analysis: document.querySelector("#analysis").value,
         });
           for (i = 0; i < mediElements.length; i++) {
             var text = mediElements[i].value;
             var attribute = time[i] ;

            db.collection('User Details').doc(user.uid).collection('Prescription').update({
           [attribute] : text ,
         }); 
          console.log(attribute,text);
          }
     
          
         } 
      
      });
      }); */

  /*  let documents = db.collection('User Details').get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          console.log("Parent Document ID: ", doc.id);
  
          let subCollectionDocs = firebase.firestore().collection('User Details').doc(doc.id).collection("Prescription").get()
            .then(snapshot => {
              snapshot.forEach(doc => {
                console.log("Sub Document ID: ", doc.id);
              })
            }).catch(err => {
              console.log("Error getting sub-collection documents", err);
            })
        });
      }).catch(err => {
      console.log("Error getting documents", err);
    }); */
    
}
