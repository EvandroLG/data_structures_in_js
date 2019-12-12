const DoublyLinkedList = require('./doublyLinkedList');

describe('doubly linked list', () => {
  it('should add new node at beginning of list', () => {
    const linkedList = new DoublyLinkedList();
    linkedList.addFirst('ruby');
    linkedList.addFirst('lua');
    linkedList.addFirst('javascript');

    expect(linkedList.size).toBe(3);
    expect(linkedList.findByIndex(0)).toBe('javascript');
    expect(linkedList.findByIndex(1)).toBe('lua');
    expect(linkedList.findByIndex(2)).toBe('ruby');
  });

  it('should add new node at end of list', () => {
    const linkedList = new DoublyLinkedList();
    linkedList.addLast('ruby');
    linkedList.addLast('lua');
    linkedList.addLast('javascript');

    expect(linkedList.size).toBe(3);
    expect(linkedList.findByIndex(2)).toBe('javascript');
    expect(linkedList.findByIndex(1)).toBe('lua');
    expect(linkedList.findByIndex(0)).toBe('ruby');
  });

  it('should check if there is at least one node with the value', () => {
    const linkedList = new DoublyLinkedList();
    linkedList.addLast('ruby');
    linkedList.addLast('lua');
    linkedList.addLast('javascript');

    expect(linkedList.contains('ruby')).toBeTruthy();
    expect(linkedList.contains('lua')).toBeTruthy();
    expect(linkedList.contains('ruby')).toBeTruthy();
    expect(linkedList.contains('typescript')).toBeFalsy();
  });

  it('should remove item by index', () => {
    const linkedList = new DoublyLinkedList();
    linkedList.addLast('ruby');
    linkedList.addLast('javascript');
    linkedList.addLast('python');
    linkedList.addLast('typescript');
    linkedList.addLast('lua');

    expect(linkedList.removeByIndex(0)).toBeTruthy();
    expect(linkedList.contains('ruby')).toBeFalsy();
    expect(linkedList.size).toBe(4);
    expect(linkedList.findByIndex(0)).toBe('javascript');
    expect(linkedList.findByIndex(1)).toBe('python');
    expect(linkedList.findByIndex(2)).toBe('typescript');
    expect(linkedList.findByIndex(3)).toBe('lua');

    expect(linkedList.removeByIndex(2)).toBeTruthy();
    expect(linkedList.size).toBe(3);
    expect(linkedList.findByIndex(0)).toBe('javascript');
    expect(linkedList.findByIndex(1)).toBe('python');
    expect(linkedList.findByIndex(2)).toBe('lua');

    expect(linkedList.removeByIndex(2)).toBeTruthy();
    expect(linkedList.size).toBe(2);
    expect(linkedList.findByIndex(0)).toBe('javascript');
    expect(linkedList.findByIndex(1)).toBe('python');
  });

  it('should remove item by value', () => {
    const linkedList = new DoublyLinkedList();
    expect(linkedList.removeByValue('javascript')).toBeFalsy();

    linkedList.addLast('javascript');
    expect(linkedList.removeByValue('javascript')).toBeTruthy();
    expect(linkedList.size).toBe(0);
    expect(linkedList.contains('javascript')).toBeFalsy();

    linkedList.addLast('javascript');
    linkedList.addLast('lua');
    expect(linkedList.removeByValue('javascript')).toBeTruthy();
    expect(linkedList.size).toBe(1);
    expect(linkedList.contains('javascript')).toBeFalsy();
    expect(linkedList.removeByValue('lua')).toBeTruthy();
    expect(linkedList.size).toBe(0);
    expect(linkedList.contains('lua')).toBeFalsy();

    linkedList.addLast('javascript');
    linkedList.addLast('lua');
    linkedList.addLast('ruby');
    linkedList.addLast('python');
    expect(linkedList.removeByValue('python')).toBeTruthy();
    expect(linkedList.size).toBe(3);
    expect(linkedList.contains('python')).toBeFalsy();
    expect(linkedList.removeByValue('lua')).toBeTruthy();
    expect(linkedList.size).toBe(2);
    expect(linkedList.contains('lua')).toBeFalsy();
    expect(linkedList.removeByValue('ruby')).toBeTruthy();
    expect(linkedList.size).toBe(1);
    expect(linkedList.contains('ruby')).toBeFalsy();
    expect(linkedList.removeByValue('javascript')).toBeTruthy();
    expect(linkedList.size).toBe(0);
    expect(linkedList.contains('javascript')).toBeFalsy();
  });
});
