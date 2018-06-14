var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.front = 0;
  newQueue.end = 0;

  return newQueue;
  };

var queueMethods = {
	enqueue: function(value) {
    this[this.end] = value;
    this.end++;
  },

 	dequeue: function() {	
 	if ((this.end - this.front) > 0){
	    var deletedFirst = this[this.front];
    	delete this[this.front];
    	this.front++;
    	return deletedFirst;
    }
  },

  	size: function() {
    return this.end - this.front;
  }
};
