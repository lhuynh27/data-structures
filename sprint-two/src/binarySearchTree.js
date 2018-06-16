var BinarySearchTree = function(value) {
	var binaryTree = Object.create(binaryTreePrototype);
	binaryTree.right = null;
	binaryTree.left = null;
	binaryTree.value = value;
	return binaryTree;
};

var binaryTreePrototype = {};

binaryTreePrototype.insert = function(value){
	if(value < this.value){
    	if(this.left === null){
      		this.left = BinarySearchTree(value);
      	} else {
      	this.left.insert(value);
    	}
    } else if(value > this.value){
  		if(this.right === null){
      		this.right = BinarySearchTree(value);
		} else {
		this.right.insert(value);
		}	
    } else {

    }	 	
};

binaryTreePrototype.contains = function(value){
  	if(value === this.value){
    	return true;
  	} else if(value < this.value){
    	return !!(this.left && this.left.contains(value));    
  	} else if(value > this.value){
    	return !!(this.right && this.right.contains(value));
  	}
};

binaryTreePrototype.depthFirstLog = function(cb){
	cb(this.value);
	if(this.left){
		this.left.depthFirstLog(cb);
	}
	if(this.right){
		this.right.depthFirstLog(cb);
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
