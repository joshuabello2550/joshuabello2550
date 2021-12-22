// Your Code Here!
$('#Edit').submit(function (e) {
    e.preventDefault();
    getValue();
});
//Gets the value submitted
function getValue() {
    var Name = document.getElementById('Name_text').value
    console.log(Name);
    var Image_Url = document.getElementById('Image_Url_text').value
    console.log(Image_Url);
    var Bio = document.getElementById('Bio_text').value
    console.log(Bio);
    replaceInfo(Name, Image_Url, Bio);
}

function replaceInfo(Name, Image_Url, Bio) {
    //Repalces either the innerHTML or the src of the elemets tags with the input values
    document.getElementById('nameText').innerHTML = Name;
    document.getElementById('photoText').src = Image_Url;
    document.getElementById('bioText').innerHTML =Bio;
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
