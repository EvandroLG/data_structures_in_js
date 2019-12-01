const Queue = require('./queue');

describe('queue', () => {
  it('should add new value at the end of the queue', () => {
    const queue = new Queue();
    queue.enqueue('javascript');
    queue.enqueue('lua');

    expect(queue.size).toBe(2);
    expect(queue.storage).toMatchObject({
      0: 'javascript',
      1: 'lua',
    });
  });

  it('should remove and return the first value from the queue', () => {
    const queue = new Queue();
    queue.dequeue();
    expect(queue.size).toBe(0);

    queue.enqueue('javascript');
    queue.enqueue('lua');
    queue.enqueue('ruby');

    expect(queue.dequeue()).toBe('javascript');
    expect(queue.size).toBe(2);
    expect(queue.storage).toMatchObject({
      1: 'lua',
      2: 'ruby',
    });
  });

  it('should return the value at the beginning of the queue', () => {
    const queue = new Queue();
    expect(queue.peeks()).toBeUndefined();

    queue.enqueue('javascript');
    queue.enqueue('lua');

    expect(queue.peeks()).toBe('javascript');
    expect(queue.size).toBe(2);
  });
});
