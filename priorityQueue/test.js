const PriorityQueue = require('./PriorityQueue');

describe('priority queue', () => {
  test('enqueue and dequeue', () => {
    const queue = PriorityQueue();
    queue.enqueue('Lua', 2);
    queue.enqueue('JavaScript', 1);
    queue.enqueue('TypeScript', 3);

    expect(queue.dequeue()).toBe('JavaScript');
    expect(queue.dequeue()).toBe('Lua');
  });
});
