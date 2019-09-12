import Component from '@ember/component';

/* This controlle is responding to the changes being made from it's child components (etc buttons)*/
export default Component.extend({
    actions: {
        userDidEnterTextinDueField() {
            // Parent here will update what it was given from the child component.
            alert("Response obtained from the child component")
        }
    }
});


