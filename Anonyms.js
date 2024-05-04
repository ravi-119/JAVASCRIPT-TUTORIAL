// Anonyms function 
let x = function () {
    console.log("hi");
}
x();

// immeidiatly invoke function 

(function exec (){
    console.log("Ravi");
})();

(function (x) {
 console.log(x*x);
})(5);
