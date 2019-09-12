import Component from '@ember/component';


var dueTextfield = document.getElementById('currenty_due');


// Main Accumulator for the total values
let stringAccumulator;
let accumulator = 0;
let digitStack = [];
let result = ""; // Final string for the joined strign
let finalConversion = 0;

export default Component.extend({

    /* Actions sent from the mobile keypad  */
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
        six(post) {
            post = '6';
            digitStack.push(post);
        },
        seven(post) {
            post = '7';
            digitStack.push(post);
        },
        eight(post) {
            post = '8';
            digitStack.push(post);
        },
        nine(post) {
            post = '9';
            digitStack.push(post);
        },
        decimal(post) {
            post = '.';
            digitStack.push(post);
        },
        zero() {
            post = '0';
            digitStack.push(post);
           //convertGlobalAccumulatorString();
        },
        fifteen() {
           alert("Applying 15% on the total");
        },
        clear() {
            alert("Clearing the calculator");
        }
    }
});
 
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

    // Joined array of strings into a single entity
    for (let i = 0; i < digitStack.length; i++) {
        result = result + digitStack[i];
    }
   
   finalConversion = convertStringToInt(result);

    console.log(finalConversion); // For debug purposes
//     let convertedIntegers = convertStringToInt(result);
//     console.log("Joined Digis as string " + convertedIntegers); // Test cases to see where the string is 
// }
}


// Percentage calls
function applyFifthteen() {

  //  var valueObtained = this.get('controller').get('amount');
   // alert(dueTextfield);
}
