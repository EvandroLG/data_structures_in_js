const PriorityQueue = () => {
  const items = [];

  const createItem = (item, priority) => ({
    item,
    priority,
  });

  return {
    /*
     * Adds new item to the queue according to its priority
     * The higher the priority is, the further to the end of the queue the item is added
     * @params {*} item
     * @params {number} priority
     * @returns {undefined}
     */
    enqueue(item, priority) {
      const element = createItem(item, priority);
      let wasUpdated = false;
      let i = 0;

      while (i < items.length && !wasUpdated) {
        if (items[i].priority > element.priority) {
          // add item in the current index without remove any item
          items.splice(i, 0, element);
          wasUpdated = true;
        }

        i++;
      }

      if (!wasUpdated) items.push(element);
    },

    /*
     * Removes and returns element from the beginning of the queue
     * @returns {any}
     */
    dequeue() {
      return items.length ? items.shift().item : null;
    },
  };
};

module.exports = PriorityQueue;
