/*let link = http://i.dailymail.co.uk/i/pix/2015/09/01/18/2BE1E88B00000578-3218613-image-m-5_1441127035222.jpg;89?*/

$("#form_id").submit(function (e) {
    e.preventDefault();

    // Your Code Here!
    var linkInput = document.getElementById('link_input').value;
    console.log(linkInput);
    insertImageOnPage(linkInput)
    
});
function insertImageOnPage(linkInput) {
    var h = document.createElement('img');
    h.src = linkInput;
    h.style.margin = 0 + "px";
    h.style.height = 300 + "px";
    var contain = document.getElementById('container');
    contain.appendChild(h);
}

    /*function insertImageOnPage(image, linkInput) {
    if (image === !null) {
        document.getElementById('Images').src = null;
    } else {
        document.getElemntById('Images').src = linkInput;
    }
}*/