import Component from '@ember/component';

let percentageValue = 0.0;
let billDueSample = 83.20;
let tipAdjusted = 0.0;

let total = 0.0;
let generatedTip = 0; // This is the generated tip local var to be blubbled in

/* This controller is responding to the changes being made from it's child components (etc buttons)*/
export default Component.extend({
    actions: {
        set15Percent() {
            // Parent here will update what it was given from the child component.
            percentageValue = 0.15;
            let generatedTip = billDueSample * percentageValue;
            total = generatedTip + billDueSample;
           // alert("Due tip" +  generatedTip + " Grand total: " + total);
        }, 
        set18Percent() {
            percentageValue = 0.18;
            alert("Value:" +  percentageValue);

            // Sample sedning a value to the main keybnoard
            let t = document.getElementById('t2');
            t.value = "Works";
        },
        set20Percent() {
            percentageValue = 0.20;
            alert("Value:" +  percentageValue);
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


