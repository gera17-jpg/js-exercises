/*Complete the function evenOrOdd such that it returns the string "even" when the number parameter it receives is even and "odd" otherwise.
Can you make it work with negative numbers too?*/
function evenOrOdd(number) {
    console.log(number % 2);
    if(number %2 ===0){
        return "even";
    }else{
        return "odd";
    }
}
