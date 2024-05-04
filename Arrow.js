// 1. one parameter, and a single returnstatement  
const square = x => x * x;
let output1 = square(5);
// 2. multiple parameters and a single return expression 
const sumoftwonumbers = (x,y) => x + y; 
let output2 = sumoftwonumbers(1,2);

// multiple statements in function expression 

const sum = (x , y) => {
    console.log("Adding ${x} and ${y}");
    return x + y;
};
let output3 = sum(1,2);

// Returning an object 
const sumAndDiffrence = (x,y) =>( { sum:x+y, diffrence: x-y} );

let oputput4 = sumAndDiffrence(5,3);
