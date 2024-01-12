class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(item) {
        return this.items.push(item);
    }
    dequeue() {
        const removedElement=this.items[0];
        delete this.items[0];
        return removedElement;
    }
    peek(){
        return this.items[0];
    }
    isEmpty(){
        return this.items.length===0
    }
    display(){
        console.log(this.items.toString());
    }
}
const queue=new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.display()
console.log(queue.peek());
queue.dequeue()
queue.display()

