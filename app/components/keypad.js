import Component from '@ember/component';


// Main Accumulator for the total values
var accumulator = 0;

export default Component.extend({
    actions: {
        one(post) {
            post = 1;
            alert("Clicked on button " + post);
            callThisFunction();
        },
        two(post) {
            post = 2;
            alert("Clicked on button " + post)
        }
    }
});



function callThisFunction( ) {
    alert("Fbnction was called succesfully");
}
