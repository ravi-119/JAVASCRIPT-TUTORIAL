let myHeros = ["Thor", "Spiderman"]
let mydcHeros = ["Batman", "Flash", "Superman"]

let heroPower = {
    thor: "Hammer",
    Spiderman: "Sling",


    getSpidermanPower: function(){
        console.log(`spidy power is ${this.Spiderman}`);
    }
}

Object.prototype.ravi = function(){
    console.log(`ravi is present in all objects`);

}

console.log(myHeros.ravi());
console.log(heroPower.ravi());

Array.prototype.heyRavi = function(){
    console.log(`ravi says hii`);
}

console.log(myHeros.heyRavi());
// console.log(heroPower.heyRavi());

// inheritence

const user = {
    name: "top name",
    email: "top@gmail.com" 

}

const teacher = {
    makeVideos: true
}

const teachingSuppport = {
    IsAvailable: false
} 

const TAAssistence = {
    makeAssignment: "Java script Assignment",
    fulltime: true,
    __proto__:teachingSuppport
}

// teacher.__proto__ = user

Object.setPrototypeOf(teachingSuppport, teacher)

console.log(TAAssistence.IsAvailable);


String.prototype.truelength = function(){
    console.log(`True length is ${this.trim().length}`);
}
 
"hitesh    ".truelength()
"anurag      ".truelength()