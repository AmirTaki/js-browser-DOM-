document.getElementById("text").innerHTML = "What DOM ?"


/*
DOM => document object model
تعاملی کردن قالب html
*/
window // -> object document : DOM
/* 
کار ابجکت داکیومنت دستگاری المنت های صفحه است
*/
window.document 

/*
model :در واقع این ابجکت یک مدل است از سند اچ تی ام ال است 
*/


// متولد شدن Document

window.DOMParser  // Constractor Function => دریافت سند اچ تی ام ال متنی و تبدیل آن به ابجکت

window.document.querySelector("h2").innerHTML = "DOM"

window.document.querySelector('h2').style.color = "red";

window.document.querySelector('h2').remove()