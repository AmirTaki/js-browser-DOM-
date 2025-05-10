// document.getElementById("text").innerHTML = "property & method Elemnet  : DOM ?"


// property : tagName
document.getElementById("ref-link")

document.getElementById("ref-link").tagName

document.querySelector("li")

document.querySelector("li").tagName


// metod matches 

document.querySelector('ul').matches('#to-do-list')  // => true

document.querySelector('ul').matches('.title')  // => false

document.querySelector('ul').matches('a')  // => false


//با استفاده از این متد میتوان یک المنت تمام صفحه کنیم
// document.querySelector("img").requestFullscreen()