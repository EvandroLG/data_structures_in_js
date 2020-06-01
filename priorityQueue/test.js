const PriorityQueue = require('./PriorityQueue');

describe('priority queue', () => {
  test('enqueue, dequeue and tostring', () => {
    const queue = PriorityQueue();
    queue.enqueue('Lua', 2);
    queue.enqueue('JavaScript', 1);
    queue.enqueue('TypeScript', 3);

    expect(queue.toString()).toBe('JavaScript Lua TypeScript');
    expect(queue.dequeue()).toBe('JavaScript');
    expect(queue.dequeue()).toBe('Lua');
  });
});
