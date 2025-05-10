// document.getElementById("text").innerHTML = "Nodes are objects : DOM ?"


// Nodes are objects

let link = document.getElementById("ref-link")

let headTitle = document.querySelector('#header-title')

/* هر دو یک نود از نوع المنت است
ما در جاوا اسکریپت چیزی جز آبجکت نداریم
*/

typeof(link)   /// return => object

typeof(headTitle)

/*
نود ها هم به نوعی آبجکت هستند
در جاوا اسکریپت هر آبجکتی یک سازنده دارد
برای همه المنت ها یک  سازنده ها وجود دارد
*/

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

link.constructor  // => return : HTMLAnchorElement()

headTitle.constructor  // => return HTMLHeadingElement()

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/*
 بنابراین هر نود یک آبجکت است و هر آبجکت یک سری پروپرتی و متد دارد که میتوان به کمک آن عملی انجام داد
*/

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/* همه متد های که برای نود داکیومنت استفاده میکردیم میتوان برای بقیه نودهای المنت استفاده کرد
*/
document.getElementById("to-do-list").getElementsByTagName("li")


headTitle.innerHTML   // => return : dummy project

headTitle.innerHTML = "my project"