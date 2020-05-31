const QuickFind = size => {
  const elements = [...Array(size).keys()];

  const root = i => {
    let _root = i;
    if (_root !== elements[_root]) _root = root(_root);
    return _root;
  };

  return {
    isConnected(x, y) {
      return root(elements[x]) === root(elements[y]);
    },

    union(x, y) {
      elements[root(x)] = root(y);
    },
  };
};

module.exports = QuickFind;
