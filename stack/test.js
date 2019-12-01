const Stack = require('./stack');

describe('stack', () => {
  it('should add new value at the end of the stack', () => {
    const stack = new Stack();
    stack.push('javascript');
    stack.push('lua');

    expect(stack.size).toBe(2);
    expect(stack.storage).toMatchObject({
      0: 'javascript',
      1: 'lua',
    });
  });

  it('should remove and return the last item from the stack', () => {
    const stack = new Stack();
    expect(stack.pop()).toBeUndefined();
    expect(stack.size).toBe(0);

    stack.push('javascript');
    stack.push('python');
    stack.push('lua');
    stack.push('ruby');

    expect(stack.pop()).toBe('ruby');
    expect(stack.size).toBe(3);
    expect(stack.storage).toMatchObject({
      0: 'javascript',
      1: 'python',
      2: 'lua',
    });
  });
});
