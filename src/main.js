// document.getElementById("text").innerHTML = "Query Selector : DOM ?"

// Query Selector & Query Selector All
//Query Selector
window.document.querySelector("#to-do-list")  // id 

window.document.querySelector('.title')  // class => return one element =>

window.document.querySelector('li')     // tag => return one elemtnt

// Query Selector All  => خروجی از نوع نود لیست است
window.document.querySelectorAll(".title") // class => return all element  خروجی مجموعه ای از عناصر

window.document.querySelectorAll('li')   // tag => return all element


let nodeList = document.querySelectorAll(".title");

nodeList[2]

document.querySelectorAll("#myform input")

document.querySelectorAll("#myform input[type=text]")

document.querySelectorAll("*")  // برگرداندن تمام المنت های درون سند

document.querySelectorAll("main *") //  برگرداندن تمام المنت های   (مین) درون سند


for (let i = 0 ; i < nodeList.length; i++){
    console.log(nodeList[i])
}

console.log("------- for each --------------")

nodeList.forEach(element => {
    console.log(element)
});