// Let's define an adding function.
var add = function(a,b){
    return a + b;
}

// Let's define our inputs in an array.
var array = [2,2];

// We all know 2 + 2 = 4;
var sum = add.apply(null, array);

console.log(sum); // 4