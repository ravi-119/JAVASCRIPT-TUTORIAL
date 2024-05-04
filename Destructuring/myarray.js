// let newArray = [1, 2, 3, 4,]
// console.log(typeof newArray);


let oneArray = [1, 2, 3, 4]
let twoArray = [5, 6, 7, 8]


// let threeArray = oneArray.concat(twoArray)

// let threeArray = [oneArray, twoArray];


let threeArray = [...oneArray, ...twoArray];
console.log(threeArray);


// spred operator 
// ...oneArray = 1, 2, 3, 4 
// ...twoArray = 5, 6, 7, 8 

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




// Rest operator
function manyArguments(){
   console.log(typeof arguments);
   let args =  Array.from(arguments)
   let finalArr = args.map(e => e*2)
   console.log(finalArr);    
}



function manyArgument2(...args) {
   console.log(typeof args);
   let finalArr = args.map(e => e)
   console.log(finalArr);
}

// manyArguments(1, 2, 3)
// manyArgument2(1, 2, 3)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


const names= ["sayrabhj", "ravi"]
const newNames = ["batamna", ...names, "thor" ]
console.log(newNames);


const sitName = "pwSkills"
console.log([...sitName]);

function pwSkills(...values) {
   return values;
}
console.log(pwSkills("superman", "flash"));