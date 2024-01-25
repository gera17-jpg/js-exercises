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

//Complete the function getNumberOfElements such that it returns the number of items contained in the elements array it receives.
function getNumberOfElements(elements) {
    return elements.length;
}

// Sample usage - do not modify
console.log(getNumberOfElements(['a', 'b', 'c'])); // 3
console.log(getNumberOfElements([])); // 0
