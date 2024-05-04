let powerTwo = (n) => {
    return n ** 2
}
// console.log(powerTwo(5));

function powerCube(powerTwo, n) {
    return powerTwo(n) * n
}

console.log(powerCube(powerTwo, 4));

function sayHello() {
    return () =>{
        console.log("Hello Ravi");

    }
}
let guessValue = sayHello()
console.log(guessValue);

guessValue();


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let higherOrder = n =>{
    let oneFun = m =>{
        let twoFun = p =>{
            return m + n + p

        }
        return twoFun
    }
    return oneFun 
}

console.log(higherOrder(2) (3) (4));

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


let myNums = [2, 3, 4, 5]

let sumArray = arr =>{
    let total = 0
    arr.forEach(function(element){
        total += element
    }); 
    return total 
}
console.log(sumArray(myNums));

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



function sayOneMoreHello() {
    console.log("Hello Ravi!", Math.random());
}
setInterval(sayOneMoreHello, 1000);

setTimeout(sayOneMoreHello, 2000)


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
