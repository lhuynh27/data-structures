

// Instantiate a new graph
var Graph = function() {
	this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
	this.nodes[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
	return Boolean(this.nodes[node]);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
	if(this.nodes[node]){
		var nodesObj = this.nodes;
		this.nodes[node].forEach(function(connectedNode){
			var index = nodesObj[connectedNode].indexOf(node);
			nodesObj[connectedNode].splice(index, 1);
	})
	delete this.nodes[node];
	}
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) { 
	return this.nodes[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
	this.nodes[fromNode].push(toNode);
	this.nodes[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
	if(this.hasEdge(fromNode, toNode)){ 
		var index = this.nodes[fromNode].indexOf(toNode);
		delete this.nodes[fromNode][index];
		index = this.nodes[toNode].indexOf(fromNode);
		delete this.nodes[toNode][index];
	}
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
	for(var key in this.nodes){
		cb(parseInt(key));
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


