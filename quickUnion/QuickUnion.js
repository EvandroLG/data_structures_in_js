const QuickFind = size => {
  const elements = [...Array(size).keys()];

  /*
   * Given i, find the root
   * @params {number} i - index
   * @returns {number}
   */
  const root = i => {
    let index = i;
    if (index !== elements[index]) index = root(index);
    return index;
  };

  return {
    /*
     * Check if elements are connected
     * @params {number} x
     * @params {number} y
     * @returns {boolean}
     */
    isConnected(x, y) {
      return root(elements[x]) === root(elements[y]);
    },

    /*
     * Create union
     * @params {number} x
     * @params {number} y
     * @returns {undefined}
     */
    union(x, y) {
      elements[root(x)] = root(y);
    },
  };
};

module.exports = QuickFind;
