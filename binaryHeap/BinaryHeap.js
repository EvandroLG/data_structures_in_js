const BinaryHeap = () => {
  const items = [];

  return {
    insert(value) {
      items.push(value);
      let i = items.length - 1;

      while (i) {
        let parentIndex = Math.floor((i - 1) / 2);
        let parentItem = items[parentIndex];

        if (parentItem >= value) {
          break;
        }

        items[parentIndex] = value;
        items[i] = parentItem;
        i = parentIndex;
      }
    },

    removeMax() {
      const max = items[0];
      const last = items.pop();
      items[0] = last;

      let i = 0;
      while (true) {
        let leftIndex = 2 * i + 1;
        let rightIndex = 2 * i + 2;
        let left = null;
        let right = null;
        let swap = null;

        if (leftIndex < items.length) {
          left = items[leftIndex];
          if (left > items[0]) swap = leftIndex;
        }

        if (rightIndex < items.length) {
          right = items[rightIndex];

          if (
            (swap === null && right > current) ||
            (swap !== null && right > left)
          ) {
            swap = rightIndex;
          }
        }

        if (swap === null) break;
        items[i] = items[swap];
        items[swap] = items[0];
        i = swap;
      }

      return max;
    },

    size() {
      return items.length;
    },

    toString() {
      return items.reduce((acc, curr) => `${acc}${curr} `, '').trim();
    },
  };
};

module.exports = BinaryHeap;