// document.getElementById("text").innerHTML = "node : DOM ?"


// node
/*
در درخت دام یعنی آبخکت داکیومنت هر چیزی یک نود است
یعنی آبحکت داکیومنت خودش یک نود است و تمام فرزندان و ... آن نیز نود می باشند
ولی نوغ نود ها یکسان نیست و دوازده نوع مختلف وجود دارد  
برای شناسایی از پراپرتی نود تایپ و نود نام استفاده میکنیم

*/
window.document.nodeName  // => #document

window.document.nodeType  // => 9

/* - - - - - - - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - --  - */
// childNode

window.document.childNodes  // => return childs Node

window.document.childNodes[0].nodeType // => return 10  : <!documetn html>

window.document.childNodes[1].nodeType // => return 1   : <html> .. </html>

// ما به نود هایی که از نوع المنت باشد تگ می گوییم

/* - - - - - - - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - --  - */

let myHtmlElement = document.childNodes[1]

myHtmlElement.childNodes  // => return : NodeList(3) [head, text, body]

myHtmlElement.childNodes[0].nodeType  // return 1 : elemnet
myHtmlElement.childNodes[2].nodeType   // return 1 : element

/*
همه تکست ها درون سند اچ تی ام ال در واقع نود هستند
تکست معمولی تا تکست درون اتربیوت همگی نود هستند
چرا تگ تکست در سند مشاهده نمی‌شود ؟ 
راستی که بین تگ هد و بادی ما قرار دارد یک کارکتر نامرعی است که یک تکست نود حساب مبشود
*/

myHtmlElement.childNodes[1].nodeType  // return 3 : text


/* - - - - - - - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - --  - */

// childs body
let myBody = myHtmlElement.childNodes[2]

myBody.childNodes


/* - - - - - - - - - - - - - - - - - - - - - - - -- - - - - - - - - - - - --  - */

myBody.children    // فقط نود هایی برای ما برمیگرداند که از نوع المنت هستند
