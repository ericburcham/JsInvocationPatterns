// Let's define the status quo.
var Quo = function(value){
    this.status = value;
};

// Give all instances of quo a function to get their status.
Quo.prototype.get_status = function(){
    return this.status;
}

// Let's define a status object.
var statusObject = {
    status: 'A-OK'
};

// statusObject is not an instance of Quo, and therefore
// does not inherit from Quo's prototype. This means it
// does not have a 'get_status' method. But dang it, we
// want to use that existing 'get_status' method.
//
// And we can!
var status = Quo.prototype.get_status.apply(statusObject);
console.log(status); // A-OK

// We can also do this from an instance of the Quo function.
var myQuo = new Quo("your status");
var myStatusNotYours = {
    status: "my status"
};

var myStatus = myQuo.get_status.apply(myStatusNotYours);
console.log(myStatus); // my status
