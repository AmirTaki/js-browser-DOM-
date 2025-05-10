// document.getElementById("text").innerHTML = "iteration node : DOM ?"


// itreation node
/* چگونه پدران یا برادران یک نود به دست اوریم*/

window.document.getElementById("to-do-list")

//1- parent node : پدری به دست می آورد که نوع آن نود باشند
window.document.getElementById("to-do-list").parentNode

//2-  parent element : پدری به دست می‌آورد که نوع آن المنت باشد
window.document.getElementById("to-do-list").parentElement

/*  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/* در چه صورتی میتواند متفاوت باشد */

/*روش های به دست آوردن تگ اچ تی ام ال */
// document.childNodes[1]  OR document.querySelector("html") OR document.documentElement

document.documentElement.parentElement     // => return null : چون پدر اچ تی ام ال از نوع نود نیست
document.documentElement.parentNode         // => return #document:html <html>... </html> 

/*  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/* به دست آوردن نود های هم سطح (برادر) */
document.getElementById("to-do-list").parentNode.childNodes

document.getElementById("to-do-list").parentNode.children

/*  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/* چگونگی رفتن از یک نود به نود هم سطح  */
// next
document.querySelector('#to-do-list').nextSibling  // => return : text

document.querySelector('#to-do-list').nextElementSibling // => null

// previous
document.querySelector("#to-do-list").previousSibling  // => return : text

document.querySelector('#to-do-list').previousElementSibling // => return : h2
