const BinarySearchTree = require('./BinarySearchTree');

describe('bst', () => {
  test('insert', () => {
    const bst = BinarySearchTree();

    expect(bst.insert(10)).toBeTruthy();
    expect(bst.isRoot(5)).toBeFalsy();
    expect(bst.isRoot(10)).toBeTruthy();
    expect(bst.insert(10)).toBeFalsy();
  });
});
