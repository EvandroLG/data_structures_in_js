const Graph = require('./Graph');

describe('graph', () => {
  it('should add new node', () => {
    const graph = new Graph();
    graph.addNode('Ireland');

    expect(graph.graph).toMatchObject({
      Ireland: {
        edges: new Set(),
      },
    });
  });

  it('should create new edge', () => {
    const graph = new Graph();
    graph.addEdge('Brazil', 'Argentina');

    const keys = Object.keys(graph.graph);
    expect(keys.length).toBe(2);

    expect(graph.graph).toMatchObject({
      Brazil: {
        edges: new Set(['Argentina']),
      },
      Argentina: {
        edges: new Set(['Brazil']),
      },
    });
  });

  it('should remove node from graph', () => {
    const graph = new Graph();
    graph.addEdge('Brazil', 'Argentina');
    graph.removeNode('Argentina');

    const keys = Object.keys(graph.graph);
    expect(keys.length).toBe(1);

    expect(graph.graph).toMatchObject({
      Brazil: {
        edges: new Set(),
      },
    });
  });
});
