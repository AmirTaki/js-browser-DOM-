// document.getElementById("text").innerHTML = "method documents  : DOM ?"


// method documents 
/* 
این متد ها فقط مخصوص نود داکیومنت  هستند

در درخت دام اتربیوت ها نیز خود یک نود هستند


*/ 

//document.createAttribute()  //class, target , link , ....


// ساخت اتربیوت

let att = window.document.createAttribute("target")

att.value = "_blank"

att.nodeName  // => target

att.nodeType  // => 2 : node attreibute

document.getElementById("ref-link")

document.getElementById("ref-link").setAttributeNode(att)

/* -------------------------------------------------------------------- */

// ساخت اتربیوت

let attClass = document.createAttribute("class")

// هر اتربیوت یک کلید و یک مقدار دارد

attClass.value = 'red-text'

attClass.value 

// اضافه کردن اتربیوت به المنت 

document.getElementById('ref-link').setAttributeNode(attClass)

/* -------------------------------------------------------------------- */

//بدون ساختن نود اتربیوت هم میتوان این کار را کرد

// setAttribute(key, value)

document.getElementById('ref-link').setAttribute("target", "_blank")

document.getElementById("ref-link").setAttribute("class", 'blue-text')

/* -------------------------------------------------------------------- */

/*ایجاد یک المنت جدید */
let newLi = document.createElement("li")

/* ایجاد نود تکست */
let liText = document.createTextNode("dummy item five")

/* ایجاد فرزند برای یک نود */
newLi.appendChild(liText);  // add child for parent


let ul = document.querySelector("ul")

/* اضافه کردن به المنت مدنظر*/
ul.appendChild(newLi)

/* -------------------------------------------------------------------- */

/* روش دیگر برای اضافه کردن یک المنت  */
newLi = document.createElement("li")

newLi.innerHTML  = "dummy item six"

ul.appendChild(newLi)

/* -------------------------------------------------------------------- */

/* این متد داکیومنت فعلی ما را می‌بندد و داکیومنت جدید ایجاد میکند */
document.open()

/* هر چیزی که بنویسیم در داکیومنت جدید ایجاد میکند */
document.write("<h1> new document </h1>")

/* بستن داکیومنت */
document.close() 

/* -------------------------------------------------------------------- */
