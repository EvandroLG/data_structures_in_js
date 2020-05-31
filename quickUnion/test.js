const QuickUnion = require('./QuickUnion');

describe('quick find', () => {
  test('union and find', () => {
    const quickUnion = QuickUnion(10);
    quickUnion.union(3, 8);
    quickUnion.union(5, 6);
    quickUnion.union(1, 2);

    expect(quickUnion.isConnected(1, 2)).toBeTruthy();
    expect(quickUnion.isConnected(3, 8)).toBeTruthy();
    expect(quickUnion.isConnected(5, 6)).toBeTruthy();
    expect(quickUnion.isConnected(2, 3)).toBeFalsy();
  });
});
