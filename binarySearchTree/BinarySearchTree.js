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
            current.left = node;
            return true;
          } else {
            current = current.left;
          }
        } else if (current.value < value) {
          if (isNull(current.right)) {
            current.right = node;
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

    contains(value) {
      let current = root;

      while (current) {
        if (value < current.value) {
          current = current.left;
        } else if (value > current.value) {
          current = current.right;
        } else {
          return true;
        }
      }

      return false;
    },

    findHeight(node = root) {
      if (!node) {
        return -1;
      }

      const left = this.findHeight(node.left);
      const right = this.findHeight(node.right);

      if (left > right) {
        return left + 1;
      }

      return right + 1;
    },
  };
};

module.exports = BinarySearchTree;
