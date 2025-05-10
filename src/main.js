// document.getElementById("text").innerHTML = "property  attributes : DOM ?"


// attribute (key, value)

/* 
هر المنت یک پروپرتی دارد که با استفاده از این می توان به لیست تمامی اتربیوت های مربوط به اون المنت به دست بیاوریم
.attribures
*/
let nameNodeMap =  document.querySelector('#ref-link').attributes

/*
اطلاعات در قالب 
nameNodeMap
برای ما بر میگرداند

یک مجموعه متشکل از اتربیوت ها 
*/

for(let i = 0; i <nameNodeMap.length; i++ ){
    console.log(nameNodeMap[i])
}

/* -- - - - - -- - -  - -- - -- -  - - -- - - - -- - - - -- - - - -- - --- - -- - - */

nameNodeMap.length

/* -- - - - - -- - -  - -- - -- -  - - -- - - - -- - - - -- - - - -- - --- - -- - - */

nameNodeMap[0]  // برای ما نود بر میگرداند

document.querySelector('#ref-link').attributes[0].nodeType  // => 2 : node : attribute

/* -- - - - - -- - -  - -- - -- -  - - -- - - - -- - - - -- - - - -- - --- - -- - - */

//name
document.querySelector('#ref-link').attributes[0].name

// value 
document.querySelector('#ref-link').attributes[0].value

// ownerElement :المنتی برای ما بر می گرداند که اتربیوت به آن تعلق دارد
document.querySelector('#ref-link').attributes[0].ownerElement

/* -- - - - - -- - -  - -- - -- -  - - -- - - - -- - - - -- - - - -- - --- - -- - - */

// یک نود اتربیوت همراه با مقدار آن بر میگرداند => 
// attributes.getNamedIetm('')

document.querySelector('#ref-link').attributes.getNamedItem("href")

document.querySelector('#ref-link').attributes.getNamedItem("id")

document.querySelector('#ref-link').attributes.getNamedItem("id").name

document.querySelector('#ref-link').attributes.getNamedItem("id").value

/* -- - - - - -- - -  - -- - -- -  - - -- - - - -- - - - -- - - - -- - --- - -- - - */

//حذف اتربیوت 

// document.querySelector('#ref-link').attributes.removeNamedItem('href') 

/* -- - - - - -- - -  - -- - -- -  - - -- - - - -- - - - -- - - - -- - --- - -- - - */

// اضافه کردن اتربیوت به المنت => atributes.setNamedItem("")

let myAtt = document.createAttribute("target")

myAtt.nodeType

myAtt.value = "_blank"

document.querySelector('#ref-link').attributes.setNamedItem(myAtt)

/* -- - - - - -- - -  - -- - -- -  - - -- - - - -- - - - -- - - - -- - --- - -- - - */

//  اضافه کردن اتربیوت به المنت روش دیگر

/*
برای هر المنت پروپرتی هایی هم نام با اتربیوت های اچ تی ام ال وجود دارد که با اون پروپرتی ها مقدار اتربیوت مورد نظر را دریافت کنید یا ست کنید
*/
document.querySelector('#ref-link').id

document.querySelector('#ref-link').href

document.querySelector('#ref-link').target = "_blank"

/* 
نکته از آنجا که ما یک اتربیوت در اچ تی ام ال داریم که میتوانیم اسم یک کلاس برای المنت ست کنیم واز طرفی در جاوا اسکریپت یک کلمه کلیدی به اسم کلاس وجود دارد که با آن یک کلاس میسازیم برای اینکه این ها با هم قاطی نشوند پروپرتی همنام کلاس وجود نداردبنابراین 
className
نام پروپرتی است
*/

document.querySelector('#ref-link').className = "red-text"

/* -- - - - - -- - -  - -- - -- -  - - -- - - - -- - - - -- - - - -- - --- - -- - - */

document.querySelector('#ref-link').setAttribute('target', "_blank")// اتربیوت به المنت مد نظر ست میکند

document.querySelector("#ref-link").getAttribute('id')  //  مقدار اتربیوت برای ما بر میگرداند

// document.querySelector("#ref-link").removeAttribute('id')

document.querySelector("#ref-link").getAttributeNode('target') // مقدار اتربیوت در قالب یک نود بر میگرداند

document.querySelector("#ref-link").getAttributeNode('target').ownerElement

/* -- - - - - -- - -  - -- - -- -  - - -- - - - -- - - - -- - - - -- - --- - -- - - */

/* میتوانیم از اتربیوت شخصی خودمان استفاده کنیم*/ 

document.querySelector("#main-title").getAttribute('product-name')

/* -- - - - - -- - -  - -- - -- -  - - -- - - - -- - - - -- - - - -- - --- - -- - - */

/* has attribute : چک‌ میکند که المنت ما اتربیوت دارد یا نه  */

document.getElementById("main-title").hasAttributes() // => true

document.getElementById("main-title").hasAttribute("product-name") // => true

document.getElementById("main-title").hasAttribute("href")  // => false

