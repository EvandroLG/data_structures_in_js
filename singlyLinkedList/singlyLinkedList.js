class SinglyLinkedList {
  constructor() {
    this.size = 0;
    this._head = null;
    this._tail = null;
  }

  /*
   * Returns true if list is empty
   * @returns {Object}
   */
  _isEmpty() {
    return this.size === 0;
  }

  /*
   * Creates new node using value passed by parameter
   * @params {*} value - node value
   * @returns {Object}
   */
  _createNode(value) {
    return {
      value,
      next: null,
    };
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
    }

    this.size = this.size + 1;
    this._tail = node;
  }

  /*
   * Adds new node at first position in the LinkedList
   * @params {*} value - node value
   * @returns {undefined}
   */
  addFirst(value) {
    const node = this._createNode(value);
    this.size = this.size + 1;

    if (!this._head) {
      this._head = node;
      this._tail = node;
    } else {
      node.next = this._head;
      this._head = node;
    }
  }

  /*
   * Returns value of node at index position passed by parameter
   * @params {Number} index - node index
   * @returns {*}
   */
  findByIndex(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }

    let current = this._head;
    let i = 0;

    while (i < index) {
      i = i + 1;
      current = current.next;
    }

    return current.value;
  }

  /*
   * Removes by index
   * @params {Number} index - node index
   * @returns {Boolean}
   */
  removeByIndex(index) {
    if (index < 0 || index >= this.size || !this._head) {
      return false;
    }

    if (index === 0) {
      this._head = this._head.next;

      if (!this._head) {
        this._tail = null;
      }
    } else if (index === this.size - 1) {
      let prev = this._head;

      while (prev.next !== this._tail) {
        prev = prev.next;
      }

      this._tail = prev;
      this._tail.next = null;
    } else {
      let current = this._head;
      let i = 0;

      while (i < index - 1) {
        i = i + 1;
        current = current.next;
      }

      current.next = current.next.next;
    }

    this.size = this.size - 1;
    return true;
  }

  /*
   * Removes first item with its value
   * @params {*} value - node value
   * @returns {Boolean}
   */
  removeByValue(value) {
    if (this._isEmpty()) {
      return false;
    }

    if (this._head.value === value) {
      this._head = this._head.next;
      this.size = this.size - 1;

      return true;
    }

    let prev = this._head;
    let current = this._head.next;

    while (current) {
      if (current.value === value) {
        prev.next = current.next;
        this.size = this.size - 1;

        return true;
      }

      prev = current;
      current = current.next;
    }

    return false;
  }
}

module.exports = SinglyLinkedList;
