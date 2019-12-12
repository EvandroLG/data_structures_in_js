class Graph {
  constructor() {
    this.graph = {};
  }

  /*
   * Adds a new value
   * @params {*} value - node value
   * @returns {undefiend}
   */
  addNode(value) {
    this.graph[value] = {
      edges: new Set(),
    };
  }

  /*
   * Remove node and its references
   * @params {*} value - node value
   * @returns {Boolean}
   */
  removeNode(value) {
    if (!this.graph[value]) {
      return false;
    }

    delete this.graph[value];

    for (const key of Object.keys(this.graph)) {
      this.graph[key].edges.delete(value);
    }

    return true;
  }

  /*
   * Adds an edges between vertice a and vertice b
   * @params {*} v1 - value of vertice 1
   * @params {*} v2 - value of vertice 2
   * @returns {undefiend}
   */
  addEdge(v1, v2) {
    if (!this.graph[v1]) {
      this.addNode(v1);
    }

    if (!this.graph[v2]) {
      this.addNode(v2);
    }

    this.graph[v1].edges.add(v2);
    this.graph[v2].edges.add(v1);
  }
}

module.exports = Graph;
