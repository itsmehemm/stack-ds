class Stack {

    constructor() {
        /* Default size of the stack is 100 entries */
        this.size = 100
        this.stack = new Array(100)
        this.top = -1
    }

    push(element) {
        this.top += 1
        this.stack.push(element)
    }

    pop() {
        this.top -= 1
        return this.stack.pop()
    }

    print() {
        this.stack.forEach(element => {
            console.log(element);
        })
    }

    empty() {
        if (this.top === -1) 
            return true
        return false
    }
}
