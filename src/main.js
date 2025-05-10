// document.getElementById("text").innerHTML = "Access to the element DOM ?"
// - Access to the element : - دسترسی به المنت

// Get element by id  : دسترسی با آی دی
window.document.getElementById('to-do-list')

// Get element by class name : دسترسی با نام کلاس
window.document.getElementsByClassName("to-do-item")  // => HTMLCollection

let toDoItmes = document.getElementsByClassName("to-do-item") 

for (let i in toDoItmes){console.log(toDoItmes[i])}


window.document.getElementsByClassName("to-do-section") // -> HTMLCollection


// Get element by tag name : دسترسی با نام تگ
window.document.getElementsByTagName('li')

