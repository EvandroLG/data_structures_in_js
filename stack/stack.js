class Stack {
  constructor() {
    this.storage = {};
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  /*
   * Push a new value at the end of the stack
   * @params {*} value - the value that will be stored in the stack
   * @returns {Object}
   */
  push(value) {
    this.storage[this.size] = value;
    this.size = this.size + 1;

    return this.storage;
  }

  /*
   * Remove the value from the end of the stack and returns it
   * @returns {*}
   */
  pop() {
    if (this.isEmpty()) {
      return;
    }

    const index = this.size - 1;
    const value = this.storage[index];
    delete this.storage[index];
    this.size = this.size - 1;

    return value;
  }
}

module.exports = Stack;
