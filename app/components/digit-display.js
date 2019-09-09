import Component from '@ember/component';

// This will tie in and display the digits
// This value willl stay local to the controllelr for the display
 let defaultValue = 0;

export default Component.extend({

    model() {
        let v = relayGivenValue(10);
        return 0.0;
    }
    
});



function relayGivenValue(inputValues) {
    if (inputValues == null) {
        return 0.0;
    }
    return 1;
}