import Component from '@ember/component';

let percentageValue = 0.0;
let billDueSample = 83.20;
let tipAdjusted = 0.0;

let total = 0.0;
let generatedTip = 0; // This is the generated tip local var to be blubbled in


var dueNow = 0;
var tipToApply = 0;
var totalDueNow = 0;

/* This controller is responding to the changes being made from it's child components (etc buttons)*/
export default Component.extend({
    actions: {
        set15Percent() {

            let localValue = document.getElementById('t0'); // Obtain a reference to the 1st due field;
            percentageValue = 0.15;

            if (localValue.value.length == 0) {
    
                localValue.setAttribute("style", "border: 1px solid red;");
               
            } else if (localValue.value.length > 0) {
                localValue.setAttribute("style", "border: 1px solid #d9d9d9;")
                // Take the value from the textfield and compute it.
                dueNow = localValue.value; // Grabbign the value

                // Logic
                var totalTip = (dueNow * 0.15);
                

                tipToApply = dueNow * percentageValue;
                
                alert("Grand total: " + totalDueNow);
                document.getElementById('t1').value = tipToApply.toFixed(2); // Send the value to the tip field
                document.getElementById('t2').value = totalDueNow; // Send the value to the total field.

                console.log("Total: " + dueNow);
                console.log("Tip: " + tipToApply);
                console.log("Final: " + (tipToApply + dueNow));
            }
            // End 
        }, 
        set18Percent() {
            let localValue = document.getElementById('t0'); // Obtain a reference to the 1st due field;
            percentageValue = 0.18;
            if (localValue.value.length == 0) {
    
                localValue.setAttribute("style", "border: 1px solid red;");
               
            } else if (localValue.value.length > 0) {
                localValue.setAttribute("style", "border: 1px solid #d9d9d9;")
                // Take the value from the textfield and compute it.
                dueNow = localValue.value; // Grabbign the value
                tipToApply = dueNow * percentageValue;
                totalDueNow = dueNow + tipToApply;
                document.getElementById('t1').value = tipToApply.toFixed(2); // Send the value to the tip field
                document.getElementById('t2').value = totalDueNow; // Send the value to the total field.
            }
        },
        set20Percent() {
            let localValue = document.getElementById('t0'); // Obtain a reference to the 1st due field;
            percentageValue = 0.20;
            if (localValue.value.length == 0) {
    
                localValue.setAttribute("style", "border: 1px solid red;");
              
            } else if (localValue.value.length > 0) {
                localValue.setAttribute("style", "border: 1px solid #d9d9d9;")
                // Take the value from the textfield and compute it.
                dueNow = localValue.value; // Grabbign the value
                tipToApply = dueNow * percentageValue;
                totalDueNow = dueNow + tipToApply; // Parsing and covering decimal places
                document.getElementById('t1').value = tipToApply.toFixed(2); // Send the value to the tip field
                document.getElementById('t2').value = totalDueNow; // Send the value to the total field.
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


