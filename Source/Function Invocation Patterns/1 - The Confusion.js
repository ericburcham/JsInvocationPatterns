// Define an adder.
var adder = {
    // Give it an add function.
    add: function(a, b){
        // Define a helper function to do the work.
        var doSum = function(a, b){
            // 'this' is bound to the global object.
            this.value = a + b;
            return this.value;
        }

        return doSum(a, b);
    }
}

var sum = adder.add(2,2);
console.log(sum) // We all know 2+2 = 4;

// But we polluted the global object in the process!
console.log(value); // Also 4