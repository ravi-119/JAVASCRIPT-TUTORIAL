let arr = [2, 3, 4]

arr.forEach(function(element, index, arr){
    console.log(index, element, arr);
})

arr.forEach((element, index, arr) =>{
    console.log("Arrow:", index, element, arr);
})


let heros = ["Doga", "Ajay", "Nagraj", "Sunny"]

heros.forEach((el) =>{
    console.log(el.toUpperCase());

})

arr.map(function(element, index, arr){
    console.log(element, index, arr);
})

heros.map((h) =>{
    console.log(h.toUpperCase())
})


// filter 

console.log(heros);

let heroWithRaj = heros.filter((h) =>{
    return h.endsWith("raj")

})
console.log( "filter", heroWithRaj);


// shopping cart 

let cartBill = [20, 30, 40, 50]

let sumOfCartBill = cartBill.reduce((prev, curr) => prev + curr, 0)
console.log(sumOfCartBill);




let gameScore = [200, 310, 300, 150, 250, "Ravi"]

//check if all values are numbers
console.log(typeof gameScore[1]);
let gameScoreCheck = gameScore.every((v) => typeof v === "number")
console.log("check:", gameScoreCheck);

// find score above 200 

let above200 = gameScore.find((score) => score > 200 )
console.log(above200);

// findIndex
// some 
// short 





