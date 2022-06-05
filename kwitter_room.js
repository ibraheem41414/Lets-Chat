
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBOhbR_lrXJvfJuZ-dCDWqOs1FpVcXMZUI",
      authDomain: "kwitter-2bf9f.firebaseapp.com",
      databaseURL: "https://kwitter-2bf9f-default-rtdb.firebaseio.com",
      projectId: "kwitter-2bf9f",
      storageBucket: "kwitter-2bf9f.appspot.com",
      messagingSenderId: "1010405448798",
      appId: "1:1010405448798:web:1872adf3d20aa2241628cf"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();


      
