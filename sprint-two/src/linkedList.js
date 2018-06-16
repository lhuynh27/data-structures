var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if(list.head === null){
      list.head = newNode;
      list.tail = newNode;
    }
    list.tail.next = newNode;
    list.tail = newNode;
  };

  list.removeHead = function() {
    var currentHead = list.head;
    list.head = list.head.next; //don't delete, just reassign
    return currentHead.value;
  };

  list.contains = function(target) {
    var found = list.head;
    while (found){ //loops through a block of code while a specified condition (found) is true
      if (found.value === target) return true;
        found = found.next;
      }
    return false;
  };  

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
