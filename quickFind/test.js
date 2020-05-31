const QuickFind = require('./QuickFind');

describe('quick find', () => {
  test('union and find', () => {
    const quickFind = QuickFind(10);
    quickFind.union(3, 8);
    quickFind.union(5, 6);
    quickFind.union(1, 2);

    expect(quickFind.isConnected(1, 2)).toBeTruthy();
    expect(quickFind.isConnected(3, 8)).toBeTruthy();
    expect(quickFind.isConnected(5, 6)).toBeTruthy();
    expect(quickFind.isConnected(2, 3)).toBeFalsy();
  });
});
