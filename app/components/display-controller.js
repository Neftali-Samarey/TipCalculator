import Component from '@ember/component';

let percentageValue = 0.0;
let billDueSample = 83.20;
let tipAdjusted = 0.0;

let total = 0.0;
let generatedTip = 0; // This is the generated tip local var to be blubbled in


var dueNow = 0;
var tipToApply = 0;
var totalDueNow = 0;

// Likely
var newTotal = 0;
var newTip = 0;
var newDue = 0;

/* This controller is responding to the changes being made from it's child components (etc buttons)*/
export default Component.extend({
    actions: {
        set15Percent() {

           

            let localValue = document.getElementById('t0');
            percentageValue = 0.15;

            if (localValue.value.length == 0) {
    
                localValue.setAttribute("style", "border: 1px solid red;");
               
            } else if (localValue.value.length >= 1) {

                localValue.setAttribute("style", "border: 1px solid #d9d9d9;")
                
                // Taking the value from the textfield
                newTotal = parseFloat(localValue.value);
                newTip = parseFloat(newTotal * 0.15);
                newDue = parseFloat(newTotal + newTip);

            
                document.getElementById('t1').value = newTip.toFixed(2); // Send the value to the tip field
                document.getElementById('t2').value = newDue.toFixed(2); // Send the value to the total field.


            }
            // End 
        }, 
        set18Percent() {
            let localValue = document.getElementById('t0'); // Obtain a reference to the 1st due field;
            percentageValue = 0.18;
            if (localValue.value.length == 0) {
    
                localValue.setAttribute("style", "border: 1px solid red;");
               
            } else if (localValue.value.length >= 1) {

                 localValue.setAttribute("style", "border: 1px solid #d9d9d9;")
                
                // Taking the value from the textfield
                newTotal = parseFloat(localValue.value);
                newTip = parseFloat(newTotal * 0.18);
                newDue = parseFloat(newTotal + newTip);

            
                document.getElementById('t1').value = newTip.toFixed(2); // Send the value to the tip field
                document.getElementById('t2').value = newDue.toFixed(2); // Send the value to the total field.
            }
        },
        set20Percent() {
            let localValue = document.getElementById('t0'); // Obtain a reference to the 1st due field;
            percentageValue = 0.20;
            if (localValue.value.length == 0) {
    
                localValue.setAttribute("style", "border: 1px solid red;");
              
            } else if (localValue.value.length >= 1) {
                localValue.setAttribute("style", "border: 1px solid #d9d9d9;")
                
                // Taking the value from the textfield
                newTotal = parseFloat(localValue.value);
                newTip = parseFloat(newTotal * 0.20);
                newDue = parseFloat(newTotal + newTip);

            
                document.getElementById('t1').value = newTip.toFixed(2); // Send the value to the tip field
                document.getElementById('t2').value = newDue.toFixed(2); // Send the value to the total field.
            }
        },
        computeTotal(value) {
        alert("Total recieved: " + value); 
        },
        model() {
            return total;
        }
    }
});

function getTotal() {
    let obj = this.get(total);
    return obj;
}


