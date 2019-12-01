class Queue {
  constructor() {
    this.storage = {};
    this.size = 0;
    this.head = 0;
  }

  _isEmpty() {
    return this.size === 0;
  }

  /*
   * Enqueue a new value at the end of the queue
   * @param {*} value - the value that will be stored in the queue
   * @return {Object}
   */
  enqueue(value) {
    this.storage[this.size + this.head] = value;
    this.size = this.size + 1;

    return this.storage;
  }

  /*
   * Dequeue the value from the beginning of the queue and returns it
   * @return {*}
   */
  dequeue() {
    if (this._isEmpty()) {
      return;
    }

    const value = this.storage[this.head];
    delete this.storage[this.head];
    this.size = this.size - 1;
    this.head = this.head + 1;

    return value;
  }

  /*
   *  Returns the value at the beginning of the queue
   *  @return {*}
   */
  peeks() {
    if (!this.size) {
      return;
    }

    return this.storage[this.head];
  }
}

module.exports = Queue;
