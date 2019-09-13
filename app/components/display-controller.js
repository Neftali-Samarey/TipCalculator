import Component from '@ember/component';

let percentageValue = 0.0;
let billDueSample = 83.20;
let tipAdjusted = 0.0;

let total = 0.0;

/* This controlle is responding to the changes being made from it's child components (etc buttons)*/
export default Component.extend({
    actions: {
        set15Percent() {
            // Parent here will update what it was given from the child component.
            percentageValue = 0.15;
            let generatedTip = billDueSample * percentageValue;
            total = generatedTip + billDueSample;
            document.getElementById("tipField").value = generatedTip;
            alert("Due tip" +  generatedTip + " Grand total: " + total);
        }, 
        set18Percent() {
            percentageValue = 0.18;
            alert("Value:" +  percentageValue);
        },
        set20Percent() {
            percentageValue = 0.20;
            alert("Value:" +  percentageValue);
        },
        model() {
            return total;
        }
    }
});

function getTotal() {
    return total;
}


