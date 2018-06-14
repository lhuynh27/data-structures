class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.front = 0;
  	this.end = 0;
  }

  enqueue(value) {
    this[this.end] = value;
    this.end++;
  }

  dequeue() {	
 	if ((this.end - this.front) > 0){
	    var deletedFirst = this[this.front];
    	delete this[this.front];
    	this.front++;
    	return deletedFirst;
    }
  }

  size() {
    return this.end - this.front;
  }

}
