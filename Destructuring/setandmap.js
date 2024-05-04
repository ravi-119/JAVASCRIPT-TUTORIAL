let emptyset = new Set()
console.log(emptyset.size);

let myArray = [1, 2, 3, 4, 3, 2]
let newSet = new Set([...myArray])
console.log(newSet);


// newSet.add(2)
// newSet.add(9)
newSet.clear()
console.log(newSet);
// console.log(newSet.has(9));
// console.log(newSet.has(34));





// set difference

function setDifference(setA, setB) {
   return new Set([...setA].filter(el => !setB.has(el)))
}



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// Map

let map = new Map()
console.log(Map.size);


let arr = [
   [1, "Mithun"],
   [2, "Alka"],
   [3, "prabir"],
   [4, "shivam"],
   [5, "vinay"]
];

arr.map((arrayIteams) => map.Set( arrayIteams[0], arrayIteams[1]))
