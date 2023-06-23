// console.log('salam')
// console.log("salam")
// console.log(21)
// console.log("21")

// var a = 1



// let b = 1
// console.log(b)
// b = 2

// console.log(b)

// const c = 1

// console.log(c)

// let oneNumber = 2
// let secondNum = 10
// let g = secondNum / oneNumber
// let x = 5 + oneNumber
// let y = 5 * oneNumber
// let v = 5 / oneNumber
// let m = 5 - oneNumber
// let x = oneNumber

// let h = 5 + 5

// let k = "Salam " + "sagol"
// let i = "10" + "5"
// let u = "10" + 5
// let y = 2 ** 5

// alert("salam")

// console.log(k)
// console.log(y)
// console.log(i)
// console.log(y)
// console.log(v)
// console.log(m)

// let h = prompt("ilk reqemi qeyd et")
// h = 10
// console.log(h)
// let g = prompt("ikinci reqemi qeyd ele")
// let q = prompt("ucuncu reqemi qeyd ele")
// // console.log(g)
// console.log(Number(h) + Number(g) - Number(q))

// let current = true 
// let test = false

// console.log(current)
// console.log(test)

// const hesabla = (regem1, regem2) => {
//     // console.log(regem1)
//     // console.log(regem2)
//     if (regem1 % 4 == 0 && regem1 % 5 == 0 && regem2 % 4 == 0 && regem2 % 5 == 0) {

//         console.log("her ikisi bolunur")
//     } else if (regem1 % 4 == 0 && regem1 % 5 == 0 || regem2 % 4 == 0 && regem2 % 5 == 0) {

//         console.log("biri bolunur")
//     } else {
//         console.log("bolunmur")
//     }

// }

// hesabla(10, 20)


// const oneWork = (a, b, c) => {
//     if (a > b && a > c && b > c) {
//         console.log(a)
//         console.log(Number(b) * 2)
//     } else if (a > b && a > c && c > b) {
//         console.log(Number(c) * 2)
//     } else if (b > a && b > c && a > c) {
//         console.log(Number(a) * 2)
//         console.log(b)
//     } else if (b > a && b > c && c > a) {
//         console.log(Number(c) * 2)
//         console.log(b)
//     } else if (c > a && c > b && a > b) {
//         console.log(Number(a) * 2)
//         console.log(c)
//     } else if (c > a && c > b && b > a) {
//         console.log(Number(b) * 2)
//         console.log(c)
//     }

// }
// oneWork(100, 160, 150, )


// const twoWork = (regem1) => {
//     if (regem1 % 1 == 0) {
//         console.log("tam ededdir")
//     } else {
//         console.log("tam deyil")
//     }
// }
// twoWork(555.55)


// const threeWork = (regem1) => {
//     regem1 = parseInt(regem1 / 10) % 10

//     if (regem1 == 5) {

//         console.log("beraberdir")
//     } else {
//         console.log("deyil")
//     }
//     console.log(regem1)
// }
// threeWork(351)

// const fourWork = (regem1) => {
//     regem2 = parseInt(((regem1 % 1000) / 10) / 10)
//     regem3 = parseInt((regem1 % 100) / 10)

//     if ((regem2 + regem3) % 2 == 0) {

//         console.log("cut")
//     } else {
//         console.log("tek")
//     }
//     console.log(regem2)
//     console.log(regem3)
// }
// fourWork(9715)




// const workFive = (b) => {
//     let c = Math.sqrt(b)
//     if (c % 1 == 0) {
//         console.log("koku var")
//     } else {
//         console.log("yoxdur")
//     }
// }
// workFive(144)

// function workSix(a, b, c) {
//     if (a ** 2 == (b ** 2) + (c ** 2)) {
//         console.log("ola biler")
//     } else if (b ** 2 == (a ** 2) + (c ** 2)) {
//         console.log("ola biler")
//     } else if (c ** 2 == (a ** 2) + (b ** 2)) {
//         console.log("ola biler")
//     } else {
//         console.log("ola bilmez")
//     }
// }
// workSix(4, 3, 7)

// const workSeven = (a) => {
//     if (a == 1) {
//         console.log("yanvar" + " - qis")
//     } else if (a == 2) {
//         console.log("fevral" + " - qis")
//     } else if (a == 3) {
//         console.log("mart" + " -yaz")
//     } else if (a == 4) {
//         console.log("aprel" + " -yaz")
//     } else if (a == 5) {
//         console.log("may" + " -yaz")
//     } else if (a == 6) {
//         console.log("iyun" + " -yay")
//     } else if (a == 7) {
//         console.log("iyul" + " -yay")
//     } else if (a == 8) {
//         console.log("avqust" + " -yay")
//     } else if (a == 9) {
//         console.log("sentyabr" + " -payiz")
//     } else if (a == 10) {
//         console.log("oktyabr" + " -payiz")
//     } else if (a == 11) {
//         console.log("noyabr" + " -payiz")
//     } else if (a == 12) {
//         console.log("dekabr" + " - qis")
//     } else {
//         console.log("bele ay yoxdur!!!")
//     }
// }
// workSeven(9)

// const workEight = (a) => {
//     if (a < 0) {
//         console.log("menfidir")
//     } else if (a == 0) {
//         console.log("0-a beraberdir")
//     } else {
//         console.log("musbetdir")
//     }
// }
// workEight(-12)

// const workNine = (a) => {
//     console.log(a + (a - 1))
// }
// workNine(8)


// function workTen(a) {
//     let b = a.length
//     if (b > 10 || b < 3) {
//         console.log("error")
//     } else {
//         console.log("okay")
//     }
//     console.log(b)
// }

// workTen("")

// function workEleven(a, b, c) {
//     if (a == b && a == c) {
//         console.log("beraber terefli")
//     } else if (a == b || a == c || b == c) {
//         console.log("beraber yanli")
//     } else {
//         console.log("muxtelif terefli")
//     }
// }
// workEleven(3, 9, 9)
// for (let i = 0; i <= 100; ++i) {
//     console.log(i)
// }
// const workOne = (a) => {
//     for (let i = 1; i <= a; i++) {
//         // if (i % 2 == 0) {
//         //     console.log(i)
//         // }
//         if (i % 2 !== 0) {
//             console.log(i)
//         }
//     }


// }
// workOne(130)





















































// const workOne = (b, a) => {
//     for (let i = b; i <= a; i++) {

//         if (i % 2 !== 0) {
//             console.log(i)
//         }
//     }


// }
// workOne(5, 130)

// const workFOUR = (a) => {
//     for (let i = 0; i < a; ++i) {
//         if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0) {
//             console.log(i)
//         }
//     }
// }
// workFour(25)

// function workFive(a) {

//     let c = a % 10
//     let d = parseInt(a % 100 / 10)
//     let b = parseInt(a / 100 / 10)
//     let e = parseInt(a / 100 % 10)
//     if (c == d && c == b) {
//         console.log("YES")
//     } else if (c == e && c == b) {
//         console.log("YES")
//     } else if (c == e && c == d) {
//         console.log("YES")
//     } else if (d == b && d == e) {
//         console.log("YES")
//     } else if (d == b && d == c) {
//         console.log("YES")
//     } else if (d == e && d == c) {
//         console.log("YES")
//     } else if (b == d && d == e) {
//         console.log("YES")
//     } else if (b == d && d == c) {
//         console.log("YES")
//     } else if (b == e && b == c) {
//         console.log("YES")
//     } else if (e == b && e == d) {
//         console.log("YES")
//     } else if (e == b && e == c) {
//         console.log("YES")
//     } else if (e == d && e == c) {
//         console.log("YES")
//     } else {
//         console.log("NO")
//     }
// }
// workFive(2212)

// for (let i = 0; i < 1; i++) {
//     let a = 'a'
//     console.log(a+' ');
// }
// for (let i = 0; i < 2; i++) {
//     let b = 'b'
//     console.log(b+' ')
// }
// for (let i = 0; i < 3; i++) {
//     let c = 'c'
//     console.log(c+' ')
// }

// const workSeven = (a) => {
//     let b = parseInt(a % 10)
//     let c = parseInt(a % 100 / 10)
//     let d = parseInt(a % 1000 / 100)
//     let e = parseInt(a % 10000 / 1000)
//     let f = parseInt(a % 100000 / 10000)
//     console.log(f)
//     console.log(e)
//     console.log(d)
//     console.log(c)
//     console.log(b)
// }
// workSeven(12345)


// const workEight = (a) => {
//     let b = parseInt(a % 10)
//     let c = parseInt(a % 100 / 10)
//     let d = parseInt(a % 1000 / 100)
//     let e = parseInt(a % 10000 / 1000)
//     let f = parseInt(a % 100000 / 10000)
//     let g = parseInt(a % 1000000 / 100000)
//     let h = parseInt(a % 10000000 / 1000000)
//     let l = parseInt(a % 100000000 / 10000000)
//     let m = parseInt(a % 1000000000 / 100000000)
//     console.log(b + c + d + e + f + g + h + l + m)
// }
// workEight(123456789)








// let a = 12345
// let b;
// for (let i = 0; i <= 5; i++) {
//     b = a % 10;
//     console.log(b)
//     a = parseInt(a / 10)
// }

// let a = ["salam", "meselen ", "azerbaycan"]
// let b = a.join("")
// console.log(b)

// let a = "salam meselen "
// let b = a.split("").reverse(" ")
// console.log(b)




// let a = Math.floor(Math.random() * 10);
// console.log(a)
// let b = Math.ceil(Math.random() * 10);
// console.log(b)


// function work(a, b) {
//     let c = Math.floor(Math.random() * (a - b) + b)
//     return c;

// }
// console.log(work(5, 8))




// let a = 5;
// let b = 40;
// let c = 60;

// let d = 2;
// let e = 50;
// let f = 30;



// console.log(a + " saat " + b + " deqiqe " + c + " saniye")
// console.log(d + " saat " + e + " deqiqe " + f + " saniye")

// if (e > b) {
//     a = a - 1
//     b = b + 60
// }
// if (f > c) {
//     b = b - 1
//     c = c + 60
// }

// console.log(`${a-d} saat ${b -e} deq ${c-f} san`)

// let b = 0
// let c = 1
// let a;

// for (i = 0; i < 100; i++) {

//     a = b + c
//     b = c
//     c = a
//     console.log(a)
// }




// function workOne(a, b) {


//     for (let i = a; i < b; i++) {

//         if (i % 1 == 0 && i % c !== 0) {
//             console.log(c)
//         }
//     }
// }
// workOne(1, 120)




// const workTwo = (a, b, c) => {
//     console.log(c + b * 60 + a * 60 * 60)
// }
// workTwo(5, 20, 30)






// let c = Math.random().toString(36).replace(/[^123456789abcdefghjlzxcvbn]+/g, '');
// console.log(c)



// function getRandomString(b) {
//     let c = '123456789asdfzxcvghbnjmk';
//     let a = '';
//     for (let i = 0; i < b; i++) {
//         a += c.charAt(Math.floor(Math.random() * c.length));
//     }
//     console.log(a)
//     return a;
// }

// getRandomString(9);




// const workThree = (a) => {
//     let b = '123456789asdfghjkzcxbn'
//     let c = ""
//     for (let i = 0; i < a; i++) {
//         c += b.charAt(Math.floor(Math.random() * b.length))
//     }
//     console.log(c)
//     return c

// }
// workThree(7)



// let arr =[21,"coders",true]



// let p=["salam" , " necesen"]


// p.forEach(index=> console.log(index)) 

// p.map(index=> console.log(index))

// p.filter(index)((ad) =>{
//     if(ad == "salam")
//     console.log(ad)
// })

// p.shift() "birinci indexi silir"
// p.pop() "sonuncu indexi silir"

// p.unshift("necesen") "stringi basa getirir"
// p.push("ne yazsan") "stringi sona getirir"

// let a= ["salam" , " necesen"] 
// let b= ["sa" , " nece"] 
// let butun= a.concat(b).concat("meselcun")
// console.log(butun)


// let a = "salam dunya necesen"
// let b = a.split(" ")
// console.log(b)


// let p = ["salam", "necesen", "meselcun"]
// p =[1,2,3]
// console.log(p.reverse)
// console.log(p.toString)
// console.log(p.slice(1, 3))
// console.log(p.slice(1, 3).toString())


// let ok = document.getElementById("ok")
//     //     // console.log(ok.innerText)
// let okk = document.getElementById("op")
//     //     // ok.innerText = "gonder"

// // ok.addEventListener("click", () => {
// //     okk.innerText = "necesen"
// // })

// const work = () => {
//     okk.innerText += "yaxsi"
// }
// ok.addEventListener("click", work)


// let p = ["salam", "nesen", "dunya"]

// ok.addEventListener("click", () => {
//     p.map(index => {
//         okk.innerText += index
//     })
// })



// let p = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// let okk = document.getElementById("ok")

// okk.addEventListener("click", () => {
//     p.map(index => {
//         if (index % 4 == 0 && index % 6 == 0) {
//             console.log(index)
//         }
//     })
// })


// let p = ["one", "two", "three", "four", "five"]
// let okk = document.getElementById("ok")
// let opp = document.getElementById("op")
// console.log(ok.innerText)
// okk.addEventListener("click", () => {

//     opp.innerText = ok.innerText

// })


// let array = [22, 33, 11, 44, 21, 14, 32, 1, 90, 12, 23, 28, -9, 87, 5, 44];
// let max = array[0];
// let min = array[0];
// // array.forEach(item = (item) => {
// //     if (max < item) {
// //         max = item;
// //     }
// //     if (min > item) {
// //         min = item;
// //     }
// // });
// for (let i = 0; i < array.length; i++) {
//     if (max < array[i]) {
//         max = array[i];
//     }
//     if (min > array[i]) {
//         min = array[i];
//     }
// }
// console.log(max, min);







// let a = 0
// for (let i = 0; i < 100; i++) {
//     i = a + 4
//     a = i
//     console.log(i)
// }