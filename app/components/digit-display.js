import Component from '@ember/component';

// This will tie in and display the digits
// This value willl stay local to the controllelr for the display
 let defaultValue = 0;
 let dueBoxValue = document.getElementById('dueField');

export default Component.extend({
    actions: {
        dueValue() {
            var valueObtained = this.get('amount');
            alert(valueObtained);
        }
      }
});

function relayGioutlvenValue(inputValues) {
    if (inputValues == null) {
        return 0.0;
    }
    return 1;
}