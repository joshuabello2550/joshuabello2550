// Your Code Here!
$('#Post').submit(function (e) {
    e.preventDefault();
    getInputs();
});
//Gets the inputs type inot the form
function getInputs() {
    var imageUrl = document.getElementById('ImageUrl').value;
    console.log(imageUrl);
    var caption = document.getElementById('Caption').value;
    console.log(caption);
    createNewPost(imageUrl, caption);
}
//Creates a new Post
function createNewPost(imageUrlInput, captionInput) {
    console.log('createNewPost');
    //Creates the new elements that will become the post
    //Creates the div continer for each individual image andsets its properties
    var newPost = document.createElement('div');
    newPost.style.height = 150 + 'px';
    newPost.style.width = 150 + 'px';
    newPost.style.backgroundColor = "white";
    newPost.style.padding = 7.5 + "px";
    newPost.style.marginRight = 20 + "px";
    newPost.style.overflowY = "scroll";
    newPost.style.wordWrap = "break-word";
    newPost.style.position = 'relative';

    //Creates the image tag that stores each Image Url
    var newImage = document.createElement('img');
    newImage.src = imageUrlInput;
    newImage.style.width = 100 + '%';
    newImage.style.zIndex = 1;

    //Creates the text tag that is placed beneath the image
    var newText = document.createElement('p');
    newText.innerHTML = captionInput;

    //Appends the created image and text to the created div
    newPost.appendChild(newImage);
    newPost.appendChild(newText);

    //Gets the location of the post
    var locationPost = document.getElementById('container_bottom');
    locationPost.appendChild(newPost);

    //Creates a new icon that is a x-button
    var icon = document.createElement('p');
    var iconText = document.createTextNode('X');
    icon.appendChild(iconText)
    newPost.appendChild(icon);
    icon.style.cursor = "pointer";
    icon.style.fontWeight = 900;
    icon.style.fontSize = 25 + 'px';
    icon.style.position = 'absolute';
    icon.style.zIndex = 5;
    icon.style.top = -20 + 'px';
    icon.style.right = -0 + 'px';

    //Adds an individual number as the id for newPost tag
    var newPost_id = String(Math.random())
    newPost.id = newPost_id;


    //Adds an event lsitener that check to see if an X button has been pressed
    icon.addEventListener('click', function () {
        document.getElementById(newPost_id).remove();
    });
     
}