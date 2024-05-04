// objects 
let obj = { id: 101, name:"Alex", salary:10000};
console.log(obj);

// data manuplating in an object 
let emp = new Object();
emp.id = 102;
emp.name = "sam";
emp.salary = 10000;
console.log(emp);


function Emp (i , n , s ){
    this.id = i;
    this.name = n;
    this.salary = s; 
}
const e = new Emp(101 , "Ravi", 12000);
console.log(e);

// Data fetching from an object 
console.log(emp.id);
console.log(emp["name"]);


// new value assigning in an object 
// emp.salary = 13000;
emp["salary"] = 14000;
emp.id = 13;
emp["name"] = "mr. Ravi kumar Yadav"
delete emp.id;
console.log(emp);