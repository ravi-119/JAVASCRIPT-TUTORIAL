// function without a parameter and return 
// function declaration 
function functionName(){
    // function Body 
}
// calling a function 
functionName();



// function declaration 
function sayMessage(){
    console.log("I am Happy to learn Full Stack Web Development from PW skills");
}
// calling a function 
sayMessage();
sayMessage();
sayMessage();
sayMessage();
sayMessage();






// function returning value 

// Declaration 

function functionName(){
    // function body 
    return expression / value ;
}

// calling a function 
let return_value = functionName();

// The function would be executed and on executing the return statement the value /expressipon are stored in the return_value variable 



//function returning value 
//declaration 

function functionName(){
    return "I am Happy to learn Full Stack Web Devlopment from PW skills";
}
// calling a function 
let message = functionName();
console.log(message);

//The function would be executed and on executing the retun statement the return message is stored in the message variable 





//function with no return value 
function printName(name){
    if(name == undefined){
        return;
    }
console.log(name);
}

printName();
printName("PW Skills");



// function returning value
// Declaration 
function passMessage(){
    return "I am Happy to learn Full Stack Web Devlopment from PW skills!!";
}
// calling a function 
let message2 = passMessage();

// The function would be executed and on executing the return statement the returned message is stored in the message variable 
console.log(message2);//I am Happy to learn Full Stack Web Devlopment from PW skills!!

let newMessage = message + "Enroll Today"

console.log(newMessage);//I am Happy to learn Full Stack Web Devlopment from PW skills!!Enroll Today