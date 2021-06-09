 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyA72PG7t7QtCVdWrK9p1e9u0AlkEFZ4f_g",
  authDomain: "kwitter-app-a56e7.firebaseapp.com",
  databaseURL: "https://kwitter-app-a56e7-default-rtdb.firebaseio.com",
  projectId: "kwitter-app-a56e7",
  storageBucket: "kwitter-app-a56e7.appspot.com",
  messagingSenderId: "570551883604",
  appId: "1:570551883604:web:c1f1b05d2bd2fa616fdac1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = document.getElementById("user_name").value;

document.getElementById("user_name").innerHTML = "welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

  localStorage.setItem ("room_name", room_name);

  window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}