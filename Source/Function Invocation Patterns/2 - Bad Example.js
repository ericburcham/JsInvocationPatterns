// Define an object that increments values.
var doubler = {
    // Define the value
    value: 0,

    // Define an setValue function.
    setValue: function(value) {
        // 'this' is bound to the containing object.
        this.value = value;
    },

    // Define a double function to double the value.
    double: function () {
        var helper = function(){
            // 'this' is bound to the global object.
            this.value = this.value + this.value;
        };

        helper();
    }
};

doubler.setValue(5);
console.log(doubler.value) // 5;

doubler.double(); // Error
console.log(doubler.value); // Still 5.  And confusing as hell.
