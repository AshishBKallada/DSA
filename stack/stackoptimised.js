class Stack{
    constructor(){
        this.items=[];
        this.top=-1;
    }
    push(element)
    {
        this.top++;
        this.items[this.top]=element;
    }
    pop()
    {
        if(this.isEmpty()){
            return "Stack underflow";
        }
        const item =this.items[this.top];
        this.top--;
        return item;
}                                
    peek(){
        return this.items[this.top];
    }
    isEmpty(){
        return this.items.length===0;
    }
    display(){
        if(this.isEmpty())
        {
            console.log("STACK Empty");
            return 
        }
        console.log(this.items);
    }
}
const stack=new Stack();
stack.display();
stack.push(10);
stack.push(20);
stack.display();
console.log(stack.peek());;
stack.pop();
stack.display();

