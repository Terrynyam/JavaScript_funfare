/* A loop that makes seven calls to the console.log printing a Triangl of #
#
##
###
####
#####
######
#######*/

let f1 = 1
let f2 = "#"
for (;f1 <= 7; f1++){
    console.log(f2)
    f2 += "#"
}

/*Write a program that uses console.log to print all the numbers from 1 to 100,
with two exceptions. For numbers divisible by 3, print "Fizz" instead of the
number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
When you have that working, modify your program to print "FizzBuzz" for
numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz"
for numbers divisible by only one of those).
(This is actually an interview question that*/

let start = 1
for (;start <= 100; start++){
    if ((start % 3 == 0 && start % 5 == 0)){
        console.log("fizbuzz")
        continue
    }
    if (start % 3 == 0){
        console.log("fizz")
        continue
    }
    else if(start % 5 == 0){
        console.log("buzz")
        continue
    }
    
    console.log(start)
}
/*Write a program that creates a string that represents an 8×8 grid, using newline
characters to separate lines. At each position of the grid there is either a space
or a "#" character. The characters should form a chessboard.
Passing this string to console.log should show something like this:
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
*/
let side = 8
let i = 0
let hash = "#"
let space = "  "
var board = ""
for (; i <= side; i++){
    for (var j = 0; j < side; j++){
        if((i + j)% 2 == 0){
            board += space
        }
        else{
            board += hash
        }
    }
    board += "\n"
    
}
console.log(board)
/*Write a function min that takes two arguments and returns their minimum.*/

    function min(a , b){
        if (a > b){
        return b
        }
        else return a
    }
console.log(min(7,10))    