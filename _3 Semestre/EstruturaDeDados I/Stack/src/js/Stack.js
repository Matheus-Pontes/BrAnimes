class Stack 
{
    TOP = -1;
    MAX = 10;
    stack = [];

    constructor() {}

    push($stackBody, $stackChildren) {
        if(this.stack.length < this.MAX) {
            this.stack[++this.TOP] = $stackChildren;
            $stackBody.innerHTML += this.stack[this.TOP];   
        } 
        return this.isFull();        
    }

    pop($stackBody, $stackChildrens) {
        $stackBody.removeChild($stackChildrens[this.TOP]);
        this.stack.pop();
        this.TOP--;
    }

    isEmpty() {
        return this.stack.length == -1;
    }

    isFull() {
        return this.stack.length == this.MAX ? true : false;
    }
}