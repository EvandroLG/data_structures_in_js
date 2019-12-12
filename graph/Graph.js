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

  /*
   * Removes an edges between vertice a and vertice b
   * @params {*} v1 - value of vertice 1
   * @params {*} v2 - value of vertice 2
   * @returns {Boolean}
   */
  removeEdges(v1, v2) {
    if (!this.graph[v1] || !this.graph[v2]) {
      return false;
    }

    this.graph[v1].edges.delete(v2);
    this.graph[v2].edges.delete(v1);

    return true;
  }

  /*
   * Depth First Search
   * @params {*} start - initial node
   * @params {*} callback
   * @returns {undefined}
   */
  dfs(start, callback = Function.prototype) {
    const stack = [];
    const visited = {};

    stack.push(start);
    visited[start] = true;

    while (stack.length) {
      const current = stack.pop();
      const neighbors = this.graph[current].edges;
      callback(current);

      for (const neighbor of neighbors) {
        if (!visited[neighbor]) {
          stack.push(neighbor);
          visited[neighbor] = true;
        }
      }
    }
  }

  /*
   * Breadth First Search
   * @params {*} start - initial node
   * @params {*} callback
   * @returns {undefined}
   */
  bfs(start, callback = Function.prototype) {
    const queue = [];
    const visited = {};

    queue.push(start);
    visited[start] = true;

    while (queue.length) {
      const current = queue.shift();
      const neighbors = this.graph[current].edges;
      callback(current);

      for (const neighbor of neighbors) {
        if (!visited[neighbor]) {
          queue.push(neighbor);
          visited[neighbor] = true;
        }
      }
    }
  }
}

module.exports = Graph;
