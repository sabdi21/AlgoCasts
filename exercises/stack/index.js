// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

// class function of stack
class Stack {
    constructor() {
        // to initialize the array data
        this.data = [];
    }

    push(data) {
        this.data.push(data);
    }

    pop() {
        return this.data.pop();
    }

    peek(data) {
        return this.data[this.data.length - 1];
    }
}

module.exports = Stack;
