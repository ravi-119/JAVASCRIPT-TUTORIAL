let score = 4
function one() {
    let score = 0
    console.log(score);
}

function two() {
    let score = 3
    console.log(score);
}

function three() {
    console.log(score);
}

// one()
// two()
// three()
// console.log(score);


function outerfunction() {
    let outerVar = " I am at scope level 1"

    function innerfunction() {
       let innerVar = " I am at scope level 2"
       console.log(outerVar); 
    }
    console.log(innerVar);
    innerfunction()
}

// outerfunction()


const myGlobalValue = 0 
function fun() {
    const val1 = 1
    console.log(myGlobalValue, val3);

    function innerOfFunc() {
        const val2 = 2
        console.log(val2, val1, myGlobalValue);

        function innerOfInnerFunc() {
            const val3 = 3
            console.log(val3, val2, val1, myGlobalValue);
        }
        innerOfInnerFunc()
    }
    innerOfFunc()
}
// fun()

// closure

function superFunction(){
    let outerValue = " I am outer "

    function minorFunction() {
        console.log(outerValue);
    }
    minorFunction()
}
// superFunction()




const errorMessage = "File not found"

setTimeout(function callback() {
    console.log(errorMessage);
}, 1000)


let pageCount = 0
const items = [2, 4, 5, 7, 8]
items.forEach(function iterator(num) {
    pageCount++
    console.log(num);
})

console.log("pageCount", pageCount);