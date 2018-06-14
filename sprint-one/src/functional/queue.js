var Queue = function() {
  var someInstance = {}; //objet holding all props we have below (enqueue, dequeue, size)
  var storage = {}; // Use an object with numeric keys to store values
  var head = 0; //keeps track of how many we deleted from front
  var tail = 0; //keeps track of how many we add to the back

  // Implement the methods below
  someInstance.enqueue = function(value) { //adds to end; enqueue is actually a METHOD
    storage[tail] = value;
    tail++;
  };

  someInstance.dequeue = function() { //removes from front; dequeue is actually a METHOD 
    if (head !== tail){
      // console.log(storage[head])
      var deleteFirst = storage[head];
      delete storage[head];
      head++;
      return deleteFirst; 
    }  
  };

  someInstance.size = function() { //how long is the list (can be empty)
    return Object.keys(storage).length;
  };

  return someInstance;
};
