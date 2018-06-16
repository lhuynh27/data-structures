var HashTable = function() {
	this._size = 0;
 	this._limit = 8;
  	this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  	var index = getIndexBelowMaxForKey(k, this._limit);

  	//bucket stores tuples if two keys hash to one index
  	//tupels store key vaulue pairs on index 0 (key) & 1 (value)

  	//retrieve bucket
  	var bucket = this._storage.get(index);
  	//if doesn't exsist, create one
  	if (!bucket){
  		bucket = [];
  		this._storage.set(index, bucket);
  	}

    //if key has previously stored, iterate over bucket
  	//if key exsist, update it
  	var found = false; //to keep track if we found the key
  	for(var i=0; i < bucket.length; i++){
  		var tuple = bucket[i];
  		if(tuple[0] === k){
  			tuple[1] = v;
  			found = true;
  			break;
  		}
  	}

  	//if key doesn't exsist
	  	//insert a new tuple
	if(!found){
		bucket.push([k,v]);
	}
};

HashTable.prototype.retrieve = function(k) {
  	var index = getIndexBelowMaxForKey(k, this._limit);

  	var bucket = this._storage.get(index);
  	if (!bucket){
  		return undefined;
  	}
  	for(var i=0; i < bucket.length; i++){
  		var tuple = bucket[i];
  		if(tuple[0] === k){
  			return tuple[1];
  			break;
  		}
  	}
  	return undefined; 
  	//if we never find that key 
  	//undefined instead of null because that is what the test wants in order to pass
};

HashTable.prototype.remove = function(k) {
  	var index = getIndexBelowMaxForKey(k, this._limit);

  	var bucket = this._storage.get(index);
  	if (!bucket){
  		return null;
  	}
  	for(var i=0; i < bucket.length; i++){
  		var tuple = bucket[i];
  		if(tuple[0] === k){
  			bucket.splice(i, 1); 
  			//usually antipattern
  			//when you exit the loop immediately after modifying array,
  			//that is the ony only condition acceptable
  			return tuple[1];
  		}
  	}
  	return null; //if we never find that key
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
