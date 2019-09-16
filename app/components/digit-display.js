import Component from '@ember/component';

// This will tie in and display the digits

// This value willl stay local to the controllelr for the display
 let totalDue = 0;

export default Component.extend({
    actions: {
        dueValue(got) {
            totalDue = got;
            sendToParent(totalDue);
           // console.log(totalDue);
        }
      }
});

let sendToParent = function(data) {
    let tipField = document.getElementById('t1');
    let totalField = document.getElementById('t2');
    console.log("Sending this to the parent now with a value of " + data);
    // totalField.value = this.percentageValue;
}