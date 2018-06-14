var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods)
  newStack.count = 0;
  return newStack;
  };

var stackMethods = {
	push: function(value) {
    this[this.count] = value;
    this.count++;
  },

 	pop: function() {
 	if (this.count > 0){
	    var deletedLast = this[this.count - 1];
    	delete deletedLast;
    	this.count--;
    	return deletedLast;
    }	
  },

  	size: function() {
    return this.count;
  }
};