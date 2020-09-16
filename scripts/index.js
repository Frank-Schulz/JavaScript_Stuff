const button = document.getElementById("enter");
const input = document.getElementById("input");
const ul = document.querySelector("ul");

function inputLength() {
    return input.nodeValue.length;
}

function createListElement() {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);

    li.addEventListener("click", function () {
        // creates a boolean that toggles the done class on li:
        // if the list item is clicked this toggles the done class
        let finished = this.classList.toggle("done");
        // creates a remove button for the finished item:
        let removeButton = document.createElement("button");
        removeButton.classList.add("deleteButton");

        // if the list item is clicked (li add event listener) then
        // finished is true
        if (finished) {
            removeButton.appendChild(document.createTextNode("remove"));
        }
    })
}