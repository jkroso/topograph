
# topograph

  Stores a graph of nodes and provides topological sorting. Basically just an OO API for [toposort](//github.com/marcelklehr/toposort) so you can build your graph incrementally.

## Installation

_With [packin](//github.com/jkroso/packin) or [component](//github.com/component/component)_

	$ packin add jkroso/graph

then in your app:

```js
var graph = require('graph')
```

## API

### Graph()

  Graph class

### Graph.addNode(node)

  add `node` if not already in the graph

### Graph.addEdge(from, to)

  add two nodes with a relationship

### Graph.addRelationship(from, to)

  add a relationship between two existing nodes

### Graph.toArray()

  convert to a topologically sorted array

### Graph.clone()

  clone this Graph

## Example

```js
new Graph(['c', 'a', 'd', 'b'])
  .addRelationship('a', 'b')
  .addRelationship('b', 'c')
  .addRelationship('c', 'd')
  .toArray() // => ['a', 'b', 'c', 'd']
```

## Running the tests

Just run `make` and navigate your browser to the test directory.
