// document.getElementById("text").innerHTML = "Managing Element Classes: DOM ?"

// Managing Element Classes

let mainTitle = document.querySelector("#main-title")

// mainTitle.className = 'new class' => کلاس ها قبلی حذف شدند

/* -- - - - - - - - - -- - - - - - - - - - - -- - - - - -- - -- - - - -- - - - --  */

/*   کلاس های قبلی باقی می مانند */
mainTitle.className = mainTitle.className + ' new-class ' 

/* -- - - - - - - - - -- - - - - - - - - - - -- - - - - -- - -- - - - -- - - - --  */

/* روش دیگر اضافه کردن کلاس */
mainTitle.classList  // => return DOMTokenList

mainTitle.classList.add("main-new")

mainTitle.classList.remove("main-new")

mainTitle.classList.remove('new-class')

mainTitle.classList

/* -- - - - - - - - - -- - - - - - - - - - - -- - - - - -- - -- - - - -- - - - --  */

/* جایگزین کردن یک کلاس با کلاس دیگر    */
mainTitle.classList.replace("section-title", 'new-class')

/* -- - - - - - - - - -- - - - - - - - - - - -- - - - - -- - -- - - - -- - - - --  */

/* چک میکند که آیا کلاس مد نظر. در المنت وجود دارد  */
/* اگر المنت ما کلاس داشته باشه پاک میکند اگر نداشته باشه. اضافه میکند*/

mainTitle.classList.contains("title")  // => true

mainTitle.classList.toggle("new-class") // => remove

mainTitle.classList.toggle("main-new") // => add

/* -- - - - - - - - - -- - - - - - - - - - - -- - - - - -- - -- - - - -- - - - --  */

/* این یک لیست از کلاس هاست و با براکت نوتیشن میتوان به اعضای آن دسترسی پیدا کرد */
mainTitle.classList[0]