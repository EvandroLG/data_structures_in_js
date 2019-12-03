const SinglyLinkedList = require('./singlyLinkedList');

describe('singly linked list', () => {
  it('should add new node at end of list', () => {
    const linkedList = new SinglyLinkedList();
    linkedList.addLast('javascript');
    linkedList.addLast('lua');
    linkedList.addLast('ruby');

    expect(linkedList.size).toBe(3);
    expect(linkedList.findByIndex(0)).toBe('javascript');
    expect(linkedList.findByIndex(1)).toBe('lua');
    expect(linkedList.findByIndex(2)).toBe('ruby');
  });

  it('should add new node at beginning of list', () => {
    const linkedList = new SinglyLinkedList();
    linkedList.addFirst('javascript');
    linkedList.addFirst('lua');
    linkedList.addFirst('ruby');

    expect(linkedList.size).toBe(3);
    expect(linkedList.findByIndex(2)).toBe('javascript');
    expect(linkedList.findByIndex(1)).toBe('lua');
    expect(linkedList.findByIndex(0)).toBe('ruby');
  });

  it('should return false in case node was not found', () => {
    const linkedList = new SinglyLinkedList();

    expect(linkedList.removeByIndex(-1)).toBeFalsy();
    expect(linkedList.removeByIndex(0)).toBeFalsy();

    linkedList.addLast('javascript');
    expect(linkedList.removeByIndex(1)).toBeFalsy();
  });

  it('should return true in case node was found', () => {
    const linkedList = new SinglyLinkedList();
    linkedList.addFirst('javascript');
    expect(linkedList.removeByIndex(0)).toBeTruthy();
    expect(linkedList.size).toBe(0);
    expect(linkedList.findByIndex(0)).toBeNull();

    linkedList.addLast('javascript');
    linkedList.addLast('ruby');
    linkedList.addLast('python');
    expect(linkedList.removeByIndex(2)).toBeTruthy();
    expect(linkedList.size).toBe(2);

    linkedList.addLast('typescript');
    linkedList.addLast('c');
    expect(linkedList.removeByIndex(2)).toBeTruthy();
    expect(linkedList.size).toBe(3);
    expect(linkedList.findByIndex(0)).toBe('javascript');
    expect(linkedList.findByIndex(1)).toBe('ruby');
    expect(linkedList.findByIndex(2)).toBe('c');
  });

  it('should remove node by value', () => {
    const linkedList = new SinglyLinkedList();
    expect(linkedList.removeByValue('javascript')).toBeFalsy();

    linkedList.addLast('javascript');
    expect(linkedList.removeByValue('javascript')).toBeTruthy();
    expect(linkedList.findByIndex(0)).toBeFalsy();
    expect(linkedList.size).toBe(0);

    linkedList.addLast('javascript');
    linkedList.addLast('typescript');
    linkedList.addLast('ruby');
    linkedList.addLast('python');
    expect(linkedList.removeByValue('typescript')).toBeTruthy();
    expect(linkedList.findByIndex(1)).toBe('ruby');
    expect(linkedList.size).toBe(3);
  });
});
