const drag_item = document.querySelectorAll('.drag-item'); //drag elements
const drag_list = document.querySelectorAll('.drag-item-list'); //drop elements

let selectItem;


//drag element
drag_item.forEach((item) => { //drag each item
    item.addEventListener('dragstart', onDragStart); //when it has event, called function onDragStart
});


//process
drag_list.forEach((list) => {
    list.addEventListener('dragover', onDragOver); //need to drop over
    list.addEventListener('dragenter', onDragEnter); // and enter 
    list.addEventListener('drop', onDrop); //when it has these events, called function onDrop
});

function onDrop() {
    this.append(selectItem);
    selectItem = null;
}

function onDragStart() {
    selectItem = this;
    console.log(selectItem);
} //show result in parameter 'selectItem



function onDragEnter(e) { //prevent to clear value (drop)
    e.preventDefault();
}

function onDragOver(e) {
    e.preventDefault();
}