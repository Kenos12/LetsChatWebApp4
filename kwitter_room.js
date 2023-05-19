var firebaseConfig = {
apiKey: "AIzaSyAjEAooM2hNNgs4jwTOC-lfSlOa9aLhGng",
authDomain: "kwitter2-cb0e5.firebaseapp.com",
databaseURL: "https://kwitter2-cb0e5-default-rtdb.firebaseio.com",
projectId: "kwitter2-cb0e5",
storageBucket: "kwitter2-cb0e5.appspot.com",
messagingSenderId: "794210164192",
appId: "1:794210164192:web:1a68ec1ccd575897795f85"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome "+user_name+"!"

function addRoom(){
room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";
    }
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("room_name"+Room_names);
      //Start code
      row = "<div class = 'room_name' id = "+Room_names+" onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div> <hr>"
      //End code
      });});}
getData();


function redirecttoroomname(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}