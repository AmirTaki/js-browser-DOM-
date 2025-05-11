// document.getElementById("text").innerHTML = "itration of elements: DOM ?"

// itration of elements

document.querySelector("#to-do-list").childNodes // => return child node 

document.childNodes    // => return child node html

document.querySelector("#to-do-list").children // => return child type : element

document.querySelector("#to-do-list").children.length  // => return number Child : type : element

document.querySelector("#to-do-list").childElementCount  // => return number chileElement 

document.querySelector("#to-do-list").firstChild    // => return first Child 

document.querySelector("#to-do-list").firstElementChild    // => return first Child : type Element 

document.querySelector("#to-do-list").lastChild             // => return last Child

document.querySelector("#to-do-list").lastElementChild     // => return last Child type : element

document.querySelector("#to-do-list").parentNode     // => return parent node

document.querySelector("#to-do-list").parentElement // => return parent element

document.querySelector("#to-do-list").parentElement.childNodes // => return node same-level Element 

document.querySelector("#to-do-list").parentElement.children // => return node same-level Element  type : element

document.querySelector("#main-title").nextSibling // => return node next

document.querySelector("#main-title").nextElementSibling // => return node next type : element 

document.querySelector("#main-title").previousSibling   // => return node back 

document.querySelector("#main-title").previousElementSibling // => return node back type : element

document.querySelector('.to-do-item').closest("ul")  // => return parent element specified
document.querySelector('.to-do-item').closest(".to-do-section")