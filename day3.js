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

/*Complete the function useCalculator such that it adds the "Calculator" string to the apps array it receives. Then, return the apps array.
There is a small trick in this challenge to make sure you understand an important concept. Spend some time trying to figure it out, then check the hints if you get stuck.*/
function useCalculator(apps) {
    apps.push("Calculator");
    return apps;
}

//Complete the function such that the app variable is added to the apps array. Then, return the apps array.
function useApp(apps, app) {
    apps.push(app);
    return apps;

//Complete the function getFirstApp such that it returns the first element from the apps array it receives as a parameter.
    function getFirstApp(apps) {
    return apps[0];
}

// Sample usage - do not modify
console.log(getFirstApp(["Chrome", "Clock", "Twitter"])); // "Chrome"
console.log(getFirstApp(["Clock", "Contacts"])); // "Clock"

//Complete the function getLastApp such that it returns the last element from the apps array it receives as a parameter.
function getLastApp(apps) {
    return apps.at(-1);
}
}
