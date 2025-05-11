// document.getElementById("text").innerHTML = "Operations with elements: DOM ?"

// Operations with elements :

// اضافه کردن المنت جدید

//Create Element : ساخت المنت جدید
let newSpan = document.createElement("span")


newSpan.className = "to-do-span" //  اضافه کردن کلاس به المنت

/* روش اول ایجاد نود تکست و اضافه کردن به المنت و روش دوم از پراپرتی زیر استفاده‌ میکنیم  */
newSpan.innerText = "dummy item five" // اضافه کردن تکست به درون المنت

let newLi = document.createElement("li")

newLi.appendChild(newSpan)  // اضافه کردن المنت به المنت دیگر

newLi.className = "to-do-item"

document.getElementById("to-do-list").appendChild(newLi) 

/* -- - - - - - - - - -- - - - - - - - - - - -- - - - - -- - -- - - - -- - - - --  */

/*  روش دیگر فرزند به المنت  */

/* کپی کردن از یک المنت  : cloneNode()*/

/* 
اگر  ورودی متد کلون
(false)
قرار بدهیم فرزندان درونی المنت کپی نمیکند اما اگر 
(true)
قرار دهیم فرزندان درونی آن المنت مد نظر کپی میکند
*/
// .cloneNode(false) OR .cloneNode(true)

let myLi = document.querySelector(".to-do-item").cloneNode(true)

myLi.querySelector("span").innerText = "dummy item six"  // دسترسی پیدا کردن به المنت فرزند برای تغییر تکست

document.querySelector('#to-do-list').appendChild(myLi)


/* -- - - - - - - - - -- - - - - - - - - - - -- - - - - -- - -- - - - -- - - - --  */
// اضافه کردن المنت جدید

let img = document.createElement("img")

img.src = "https://picsum.photos/200"

img.style.borderRadius = "50%";

document.querySelector('section').appendChild(img)


/* -- - - - - - - - - -- - - - - - - - - - - -- - - - - -- - -- - - - -- - - - --  */
// remove پاک کردن المنت

document.querySelector("img").remove()

/* -- - - - - - - - - -- - - - - - - - - - - -- - - - - -- - -- - - - -- - - - --  */

// remove Child :  این متد روی المنت پدر برای پاک کردن فرزندان استفاده میکنیم


let firstLi = document.querySelector("li")

firstLi.parentElement.removeChild(firstLi)

/* -- - - - - - - - - -- - - - - - - - - - - -- - - - - -- - -- - - - -- - - - --  */

// .replaceChild(newElement, oldElement) 
/*
جایگزین کردن فرزندان یک المنت با المنت دیگر
برای این کار ابتدا به پدر المنت دسترسی پیدا میکنیم
*/

let newLink = document.createElement("A")

newLink.href = "https://google.com"

newLink.id = "ref-link"

newLink.innerText = "google"

let oldLink = document.getElementById("ref-link")

document.querySelector("footer").replaceChild(newLink, oldLink)

/* -- - - - - - - - - -- - - - - - - - - - - -- - - - - -- - -- - - - -- - - - --  */

//  یک المنت قبل از یکی از فرزندان یک المنت اضافه کنیم
// .insertBefor("element", "addElement")

newLi = document.createElement("li")          // ساخت المنت جدید

newLi.innerText = "new Li"                   // اضافه کردن متن

let ul = document.querySelector("ul")       // دسترسی به المنت مد نظر 

let thirdChild = ul.children[2]            // دسترسی به فرزند المنت 

ul.insertBefore(newLi, thirdChild)    // اضافه کردن المنت به قبل از المنت مد نظر

/* -- - - - - - - - - -- - - - - - - - - - - -- - - - - -- - -- - - - -- - - - --  */

// element.insertAdjacentElement("string", elementChange) : جابه‌جایی دو المنت با همدیگر

let link = document.querySelector('#ref-link')

ul = document.querySelector("ul")

ul.insertAdjacentElement("beforebegin", link) // المنت جابه جا شده به قبل از المنت مد نظر می‌آورد 

ul.insertAdjacentElement("afterend", link)   // المنت جابه جا شده به بعد از المنت مد نظر می‌آورد 

ul.insertAdjacentElement("afterbegin", link)  // first Child

ul.insertAdjacentElement("beforeend", link)   // end Child