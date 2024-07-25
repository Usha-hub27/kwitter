
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAblnRfIYLZLALulnRcAzIJTdWqHeOq_fE",
  authDomain: "newkwitter-6d956.firebaseapp.com",
  databaseURL: "https://newkwitter-6d956-default-rtdb.firebaseio.com",
  projectId: "newkwitter-6d956",
  storageBucket: "newkwitter-6d956.appspot.com",
  messagingSenderId: "401026880287",
  appId: "1:401026880287:web:2df1cb96bb6adfc880162a"
};


// Initialize Firebase

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
 user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

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
