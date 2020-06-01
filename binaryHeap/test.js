const BinaryHeap = require('./BinaryHeap');

describe('binary heap', () => {
  const items = [45, 3, 7, 8, 12];

  test('insert', () => {
    const binaryHeap = BinaryHeap();
    items.map(binaryHeap.insert);

    expect(binaryHeap.size()).toBe(5);
    expect(binaryHeap.toString()).toBe('45 12 7 3 8');
  });

  test('remove', () => {
    const binaryHeap = BinaryHeap();
    items.map(binaryHeap.insert);
    const max = binaryHeap.removeMax();

    expect(binaryHeap.size()).toBe(4);
    expect(max).toBe(45);
    expect(binaryHeap.toString()).toBe('12 8 7 3');
  });
});
