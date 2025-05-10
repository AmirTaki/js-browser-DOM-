// document.getElementById("text").innerHTML = "HTML Collection  : DOM ?"

// html collection  

let titles = window.document.getElementsByClassName("title") // constractor ==> htmlcollection

console.log(titles)

let arr = [1, 2, 3, 4, 5] // constarctor ==> array()

console.log(titles.constructor)  // html collection

console.log(arr.constructor)   // Array()

/* --------------------------------------------------------------------- */

// method html collection & property html collection

// property htmlCollection

titles.length

window.document.getElementsByTagName('h2').length

/* --------------------------------------------------------------------- */

// item(index)   OR   [index]  
titles.item(2)
titles[3]

/* --------------------------------------------------------------------- */

/* nemed(ID) OR .['id']
  document.getElementByClassName('').namedItem("id")
  document.getElementByClassName('')['id'] */

titles.namedItem("main-title")  // برحسب ای دی بیرون میکشد
titles['main-title']   // بین لیست فراخوانی شده میگردد و ای دی مد نظر برمگیرداند

/* --------------------------------------------------------------------- */

/* itrable htmlCollection */

let list = document.getElementsByClassName("to-do-item")
for (let i = 0 ; i < list.length; i++){
    // console.log(`items ${i} : ${list[i]}`)
    console.log(list[i])
}

console.log('--------foreach---------------')
array = Array.from(list)  // convert htmlCollecto to Array
array.forEach((element) => {
    console.log(element)
});


console.log("----------for in --------")

for (let index in list){console.log(list[index])}

console.log("----------for of --------")
for (let index of list){console.log(index)}