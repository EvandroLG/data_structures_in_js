const BinarySearchTree = require('./BinarySearchTree');

describe('bst', () => {
  test('insert', () => {
    const bst = BinarySearchTree();

    expect(bst.insert(10)).toBeTruthy();
    expect(bst.isRoot(5)).toBeFalsy();
    expect(bst.isRoot(10)).toBeTruthy();
    expect(bst.insert(10)).toBeFalsy();
  });

  test('contains', () => {
    const bst = BinarySearchTree();
    bst.insert(10);
    bst.insert(20);
    bst.insert(30);

    expect(bst.contains(8)).toBeFalsy();
    expect(bst.contains(10)).toBeTruthy();
    expect(bst.contains(20)).toBeTruthy();
    expect(bst.contains(30)).toBeTruthy();
  });
});
