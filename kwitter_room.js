var firebaseConfig = {
    apiKey: "AIzaSyC7kyMsWTw5brBehSYc9Pf-g7rJhwOa1Is",
    authDomain: "project94-b1972.firebaseapp.com",
    databaseURL: "https://project94-b1972-default-rtdb.firebaseio.com",
    projectId: "project94-b1972",
    storageBucket: "project94-b1972.appspot.com",
    messagingSenderId: "722492663279",
    appId: "1:722492663279:web:6ff7d22f6826f01493421a"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome "+user_name + "!";

function addRoom(){
    room_name= document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose : "adding user name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function getData() { firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
    console.log("Room name : "+Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick= 'redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML += row;
//End code
});});}
getData();

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}
