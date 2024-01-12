class Stack{
    constructor(){
        this.items=[];
    }
    push(el)
    {
        this.items.push(el);
    }
    pop(){
        if(this.isEmpty()){
            return "EMPTYSTACK"
        }
        this.items.pop();
    }
    peek(){
        return this.items[this.items.length-1];
    }
    isEmpty(){
        return this.items.length===0
    }
    display(){
        console.log(this.items);
    }
}
const stack=new Stack()
stack.push(10)
stack.push(20)
stack.display();
stack.pop();
stack.display();
console.log(stack.peek());

