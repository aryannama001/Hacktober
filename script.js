let input = document.getElementById('input');
let btn = document.getElementById('addBtn');
let deleteBtn = document.querySelectorAll('.delete-btn');
var count ;
btn.onclick = () => {
    let li = document.createElement('li');  
    let list = document.getElementById('list');
    console.log(input.value);
    li.className = "items";
    let html = `<span class="item-txt">${input.value}</span> <span  class="delete-btn">X</span>`;
    li.innerHTML+=html;
    list.appendChild(li);
    input.value = "";
    // count = (list.childElementCount);
}
let list = document.getElementById('list');
console.log((list.childElementCount));