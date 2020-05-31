const QuickFind = size => {
  const elements = [...Array(size).keys()];

  return {
    isConnected(x, y) {
      return elements[x] === elements[y];
    },

    union(x, y) {
      elements.map((value, key) => {
        if (value === elements[x]) elements[key] = elements[y];
      });
    },
  };
};

module.exports = QuickFind;
