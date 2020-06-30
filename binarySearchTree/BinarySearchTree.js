const isNull = value => value === null;

const BinarySearchTree = () => {
  let root = null;

  const createNode = value => ({
    value,
    left: null,
    right: null,
  });

  return {
    insert(value) {
      const node = createNode(value);

      if (!root) {
        root = node;
        return true;
      }

      current = root;

      while (true) {
        if (current.value > value) {
          if (isNull(current.left)) {
            current.left = value;
            return true;
          } else {
            current = current.left;
          }
        } else if (current.value < value) {
          if (isNull(current.right)) {
            current.right = value;
            return true;
          } else {
            current = current.right;
          }
        } else {
          return false;
        }
      }
    },

    isRoot(value) {
      return (root || {}).value === value;
    },

    contains(value) {},
    remove(value) {},
  };
};

module.exports = BinarySearchTree;
