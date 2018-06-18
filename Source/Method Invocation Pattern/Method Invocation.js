// Define an object that increments values.
var incrementer = {
    // Define the value
    value: 0,

    // Define an setValue function.
    increment: function(inc) {
        // 'this' is bound to the containing object.
        this.value += typeof inc === 'number'
            ? inc
            : 1;
    }
};

incrementer.increment();
console.log(incrementer.value); // 1

incrementer.increment(9);
console.log(incrementer.value); // 10