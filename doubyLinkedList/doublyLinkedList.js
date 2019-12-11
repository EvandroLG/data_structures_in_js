class DoublyLinkedList {
  constructor() {
    this.size = 0;
    this._head = null;
    this._tail = null;
  }

  _isEmpty() {
    return this.size === 0;
  }

  _createNode(value) {
    return {
      value,
      next: null,
      prev: null,
    };
  }

  /*
   * Adds new node at first position in the LinkedList
   * @params {*} value - node value
   * @returns {undefined}
   */
  addFirst(value) {
    const node = this._createNode(value);

    if (!this._head) {
      this._tail = node;
    } else {
      node.next = this._head;
      this._head.prev = node;
    }

    this._head = node;
    this.size = this.size + 1;
  }

  /*
   * Add new node at last position in the LinkedList
   * @params {*} value - node value
   * @returns {undefined}
   */
  addLast(value) {
    const node = this._createNode(value);

    if (!this._head) {
      this._head = node;
    } else {
      this._tail.next = node;
      node.prev = this._tail;
    }

    this._tail = node;
    this.size = this.size + 1;
  }

  /*
   * Returns value of node at index position passed by parameter
   * @params {Number} index - node index
   * @returns {*}
   */
  findByIndex(index) {
    if (this._isEmpty() || index >= this.size || index < 0) {
      return null;
    }

    let current = this._head;
    let i = 0;

    while (i < index) {
      current = current.next;
      i = i + 1;
    }

    return current.value;
  }

  /*
   * Check if there's at least one node with the value passed by parameter
   * @params {*} value - node value
   * @returns {Boolean}
   */
  contains(value) {
    if (this._isEmpty()) {
      return false;
    }

    let current = this._head;

    while (current) {
      if (current.value === value) {
        return true;
      }

      current = current.next;
    }

    return false;
  }

  /*
   * Removes by index
   * @params {Number} index - node index
   * @returns {Boolean}
   */
  removeByIndex(index) {
    if (this._isEmpty() || index >= this.size || index < 0) {
      return false;
    }

    this.size = this.size - 1;

    if (index === 0) {
      this._head = this._head.next;

      if (!this._head) {
        this._tail = null;
      } else {
        this._head.prev = null;
      }

      return true;
    }

    let i = 0;
    let current = this._head;

    while (i < index) {
      current = current.next;
      i = i + 1;
    }

    if (current.prev) {
      current.prev.next = current.next;
    }

    if (current.next) {
      current.next.prev = current.prev;
    }

    return true;
  }
}

module.exports = DoublyLinkedList;
