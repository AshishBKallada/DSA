class CircularQueue {
    constructor(size) {
        this.items = new Array(size);
        this.front = -1;
        this.rear = -1;
        this.size = size;
    }
    enqueue(el) {
        if (this.isFull()) {
            console.log("Queue Full");
            return
        }
        if (this.isEmpty()) {
            this.front = 0;
        }
        this.rear = (this.rear + 1) % this.size;
        this.items[this.rear] = el;
    }
    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue Empty");
            return;
        }
        const removedElement = this.items[this.front];
        if (this.front === this.rear) {
            this.front = -1;
            this.rear = -1;
        }
        else{
            this.front=(this.front +1) % this.size;
        }
        return removedElement;
    }
    peek(){
        if (this.isEmpty()) {
            console.log("Queue Empty");
        }
        return this.items[this.front];
    }
    isFull(){
        return (this.rear + 1) % this.size === this.front;
    }
    isEmpty(){
        return this.front===-1 && this.rear===-1
    }
    display(){
        console.log(this.items);
    }

}
const queue=new CircularQueue()
queue.enqueue(10);
queue.enqueue(20);
queue.display();
