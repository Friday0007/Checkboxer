let input = document.getElementById("inp");
let submit = document.getElementById("add");
let div = document.querySelectorAll("div");
let ul = document.querySelector("ul");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

submit.addEventListener("click", function() {
    let ediv = document.createElement('div');
    let einput = document.createElement('input');
    einput.setAttribute("type", "checkbox");
    let elabel = document.createElement('label');

    console.log(input.value);
    elabel.innerText = input.value;
    input.value = "";

    ul.appendChild(ediv);
    ediv.appendChild(einput);
    ediv.appendChild(elabel);
})


ul.addEventListener("click", function(event) {
    if(event.target.nodeName == "INPUT") {
        let item = event.target.parentElement;
        item.remove();
    }
});

