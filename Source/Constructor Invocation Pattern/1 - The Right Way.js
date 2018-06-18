// Let's define the status quo.
var Quo = function(value){
    this.status = value;
};

// Create an instance
var myQuo = new Quo("confused");

// Give all instances of quo a function to get their status.
Quo.prototype.get_status = function(){
    return this.status;
}

var statusQuo = myQuo.get_status();
console.log(statusQuo); // confused
