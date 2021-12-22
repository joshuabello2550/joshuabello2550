
$(form1).submit(function (e) {
    // Your Code Here!
    e.preventDefault();

    // get the value that is typed into the Id tod_input aka the form
    var todo_input = document.getElementById('todo_input');
    var todo_text = todo_input.value;

    console.log(todo_text);
    addNewItem(todo_text);
    todo_input.value="";
});

function addNewItem(todo_text) {
    //Creates a new todo div and class to store all todo content
    var todo_card=document.createElement('div');
    todo_card.classList.add('todo_card')

    //creates a p tag and stores todo_text within the innerHTML
    var todo_text_elem = document.createElement('p');
    todo_text_elem.innerText = todo_text;

    //creates a variable and sets a random number as its id
    var todo_card_id = String(Math.random())
    todo_card.id = todo_card_id

    //appends todo_text_elem as a child to todo_card
    todo_card.appendChild(todo_text_elem);
    document.getElementById('container').appendChild(todo_card);

    //Removes the sticky note 
    todo_card.addEventListener('click', function () {
        //Your code here!

        document.getElementById(todo_card_id).remove()
    });
}