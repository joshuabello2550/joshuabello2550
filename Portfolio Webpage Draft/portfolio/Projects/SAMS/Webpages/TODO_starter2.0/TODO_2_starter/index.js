var firebaseConfig = {
    apiKey: "AIzaSyCXhuEo-y12M0hgPOHbKh-Ox3d2FLdzSdQ",
    authDomain: "vertical-backup-247613.firebaseapp.com",
    databaseURL: "https://vertical-backup-247613.firebaseio.com",
    projectId: "vertical-backup-247613",
    storageBucket: "",
    messagingSenderId: "837098858903",
    appId: "1:837098858903:web:e4094facb9df4e96"
};

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();


$("#form1").submit(function (e) {
  e.preventDefault();

  // Your code here!

    var todo_input = document.getElementById("todo-input");
    var todo_text = todo_input.value;

    saveItemToDatabase(todo_text);

    todo_input.value = "";
});

function saveItemToDatabase(todo_text) {
    // Your Code Here!
    /*creates a collection called notes 
    and adds documents that are the todo text*/
    doc = db.collection("notes").add({
        noteText: todo_text
    })
    .then(function(docRef){
    docRef.get().then(function(doc) {
      addNewItem(doc);
    });
  });
}

function addNewItem(doc) {
    // Create new todo div to store all todo content
    var todo_card = document.createElement("div");
    todo_card.classList.add("todo_card");

    // Put the todo item in a p
    var todo_text_elem = document.createElement("p");
    todo_text_elem.innerHTML = doc.data().noteText;

    // Construct the entire element
    todo_card.appendChild(todo_text_elem)

    // Add it to the DOM
    document.getElementById("container").appendChild(todo_card);

    var todo_card_id = doc.id
    todo_card.id = todo_card_id

    // Add a click listener to the todo card
    todo_card.addEventListener("click", function () {
        // Remove Element from the DOM
        document.getElementById(todo_card_id).remove()
        // Delete from Database
        db.collection("notes").doc(doc.id).delete();
    });
}

function loadNotes() {
    db.collection("notes").get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            addNewItem(doc);
        });
    });
};

$(document).ready(function () {
    loadNotes()
});