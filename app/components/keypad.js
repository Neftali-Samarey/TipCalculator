import Component from '@ember/component';


// Main Accumulator for the total values
let stringAccumulator;
let accumulator = 0;
let digitStack = [];

export default Component.extend({
    actions: {
        one(post) {
            post = '1';
            digitStack.push(post);
        },
        two(post) {
            post = '2';
            digitStack.push(post);
        },
        three(post) {
            post = '3';
            digitStack.push(post);
        },
        four(post) {
            post = '4';
            digitStack.push(post);
        },
        five(post) {
            post = '5';
            digitStack.push(post);
        },
        zero() {
            // Call the stack count function
           // alert("Count " + stackCount());
         //  displayStackValues();
           convertGlobalAccumulatorString();

           // Call the join digits to finalize the joining
        //    stringAccumulator = joinDigits();
        //    accumulator =  convertStringToInt(stringAccumulator);
        //    console.log("Final Result: " + accumulator);
        }
    }
});
 let result; // Final string for the joined strign
// Function to join the numbers together in the stack
// This function only gets called whent he user is ready to compute the tip
// Works as a final point where the current values being entered accumulate on a stack, and the user then uses that stack to
// Compute the final value based off that value
function joinDigits() {
   
    for (let i = 0; i < digitStack.length; i++) {
        result += digitStack[i];
    }

      console.log("Joined Digits Results: " + result);
  
}

function stackCount() {
    return digitStack.length;
}

function displayStackValues() {
    for (let i = 0; i < digitStack.length; i++) {
        console.log("Values: " + digitStack[i]);
    }
    alert("Final Value given : ");
}


// Converts a given string into an Int
function convertStringToInt(inputString) {
    return parseInt(inputString);
}

function convertGlobalAccumulatorString() {
    // Take the global string accumulator, and convert it
    joinDigits();
    let convertedIntegers = convertStringToInt(result);
    console.log("Joined Digis as string " + convertedIntegers); // Test cases to see where the string is 
}

