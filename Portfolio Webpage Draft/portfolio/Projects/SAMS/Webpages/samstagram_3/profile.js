//Connects your javascript to the google firebase
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

$('#Edit').submit(function (e) {
    e.preventDefault();
    getValue();
});

//gets the documents from google
function loadprofile() {
    db.collection("Profile").doc("main_profile").get().then(function (doc) {
        replaceInfo(doc);
    });
};

$(document).ready(function () {
    loadprofile();
});

//Gets the value submitted
function getValue() {
    var Name = document.getElementById('Name_text');
    Name_text = Name.value;
    console.log(Name_text);

    var ImageUrl = document.getElementById('Image_Url_text');
    ImageUrl_text = ImageUrl.value;
    console.log(ImageUrl_text);

    var Bio = document.getElementById('Bio_text')
    Bio_text = Bio.value
    console.log(Bio_text);

    saveDatatoDatabase(Name_text, ImageUrl_text, Bio_text)
    
    Name.value = "";
    ImageUrl.value = "";
    Bio.value = "";
}

//Saves the data to the database
function saveDatatoDatabase(Name_text, ImageUrl_text, Bio_text) {
    docRef = db.collection("Profile").doc("main_profile");
    docRef.set({
        nameText: Name_text,
        imageUrlText: ImageUrl_text,
        bioText: Bio_text
    });

    docRef.get().then(function (doc) {
        console.log("got this far")
        replaceInfo(doc)
        });

}

function replaceInfo(doc) {
    //Repalces either the innerHTML or the src of the elemets tags with the input values
    document.getElementById('nameText').innerHTML = doc.data().nameText;
    document.getElementById('photoText').src = doc.data().imageUrlText;
    document.getElementById('bioText').innerHTML = doc.data().bioText;
}

/*
function replaceInfo(Name, Image_Url, Bio) {
    //Creates varaibles that store the original innerHtml values
    var nameOriginal = document.getElementById('nameText').innerHTML;
    var imageUrlOriginal = document.getElementById('photoText').src;
    var bioOriginal = document.getElementById('bioText').innerHTML;

    //If the input form is empty places the orginals text
    if (Name != "") {
        nameOriginal = Name;
    } else {
        nameOriginal = nameOriginal;
    }

    //If the input form is empty places the orginals image
    if (imageUrlOriginal != "") {
        imageUrlOriginal = Image_Url;
    } else {
        imageUrlOriginal = imageUrlOriginal;
    }

    //If the input form is empty places the orginals text
    if (bioOriginal === "") {
        bioOriginal = bioOriginal;
    } else {
        bioOriginal = Bio;
    }
}
*/
