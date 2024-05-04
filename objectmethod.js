let emp = {
  name:"Ravi",

  age:19,

  salary: 12000,

  id :" rv119"


};

// fetching keys from an object
let keys = Object.keys(emp);
console.log(keys); 

// fetching values from an objects 
let values = Object.values(emp)
console.log(values);

//fetching keys and values together 
let entries = Object.entries(emp)
console.log(emp);

// Object.freeze(emp);
Object.seal(emp);
emp.address = "Nautanwa";

emp.id = "root"
console.log(emp);


// assigning an object in a new variable 
let o = Object.assign({x:16},emp);
console.log(o);