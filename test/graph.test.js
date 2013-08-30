
var chai = require('./chai')
var Graph = require('..')

describe('graph', function(){
	var graph
	beforeEach(function(){
		graph = new Graph()
			.addEdge('c', 'd')
			.addEdge('a', 'b')
			.addEdge('b', 'c')
	})
	describe('.toArray()', function(){
		it('should return a sorted array of nodes', function(){
			graph.toArray().should.eql(['a','b','c','d'])
		})
	})
})