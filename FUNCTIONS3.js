// defining a function 
// a square function
let square = function(x){
    return x * x
}
console.log(square(10))

/* let babes = function(){
    console.log("twerk")
} */
function babes(){
    console.log("twerk")
}

//power function
const power = function(base, exponent) {
    let result = 1
    for (let count = 0; count < exponent; count++) {
    result *= base
    }
    return result
}

function sqr(x){
    return x * x
}
function halves(n){
    return n / 2
}

function cars(){
    return "All the time"
}

/// another way of weriting functions
let sqr1 = (x) => {
    return x * x
}
const horn = () => {
    console.log("Toot");
}

horn()
console.log(sqr1(3))
babes()
console.log(sqr(6))
console.log(halves(50))
console.log(power(2, 10))
console.log("The Lord is good ," , cars())