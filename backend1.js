var config={
    apikey:"AIzaSyBHuisFLBfQsN08o0kei_jNWUalGz9CPMo",
    authDomain:"webd-5cffa.firebaseapp.com",
    databaseURL:
    projectId:"webd-5cffa",
    storageBucket:
    messagingSenderId:
  };
  firebase.initalizeApp(config);
  var firestore=firebase,firestore();
  const docRef=firestore.collection()".doc("");
  const outputHeader=document.querySelector("#WEBDOutput");
  const inputTextField=document.querySelector("#latestWEBDStatus");
  const saveButton=document.querySelector("#saveButton");
  saveButton.addEventListener("click",function(   {
    const texttoSave=inputTextField.value;
    console.log("I am going to save"+ textTOSave +"to Firestore");
    docRef.set({
      WebD:textTOSave
    }).then(function(){
      console.log("Status saved!");
  }).catch(function(error){
    console.log("Got an error:",error);
  });
  })
  if (doc && doc.exists)
  {
    const myData = doc.data();
    outputHeader.innerText = "WEBD status :"+ myData.WEBDStatus
  }