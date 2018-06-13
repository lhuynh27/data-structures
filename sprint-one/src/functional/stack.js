var Stack = function() {
  var someInstance = {};
  var storage = {}; // Use an object with numeric keys to store values

  // Implement the methods below
  someInstance.push = function(value) {
    storage[someInstance.size()] = value;
  };

  someInstance.pop = function() {
    var deletedLast = storage[someInstance.size() - 1]
    delete storage[someInstance.size() - 1];
    return deletedLast;
  };  

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
