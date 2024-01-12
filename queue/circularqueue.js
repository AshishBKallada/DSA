// class CircularQueue {
//     constructor(capacity) {
//         this.items = new Array(capacity)
//         this.capacity = capacity;
//         this.currentLength = 0;
//         this.rear = -1;
//         this.front = -1;
//     }
//     isFull() {
//         return this.currentLength == this.capacity
//     }
//     isEmpty() {
//         return this.currentLength == 0
//     }
//     enqueue(el) {
//         if (!this.isFull()) {
//             this.rear = (this.rear + 1) % this.capacity
//             this.items[this.rear] = el
//             this.currentLength += 1
//             if (this.front === -1) {
//                 this.front = this.rear;
//             }
//         }
//     }
//     dequeue() {
//         if (this.isEmpty()) {
//             return null;
//         }
//             const item = this.items[this.front];
//             this.items[this.front] = null;
//             this.front = (this.front + 1) % this.capacity
//             this.currentLength -= 1;

//             if (this.isEmpty()) {
//                 this.rear = -1
//                 this.front = -1
//             }
//             return item
        
//     }

//     print() {
//         if (this.isEmpty()) {
//             console.log("Queue is Empty");
//         }
//     else{
//     let str = ''
//     let i
//     for ( i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
//         str += this.items[i] + " "
//     }
//     str += this.items[i];
//     console.log(str);
// }
// }
// }

// const queue=new CircularQueue(5)
// queue.print()
// queue.enqueue(10)
// queue.enqueue(20)
// queue.dequeue()
// queue.print()

class CircularQueue{
    constructor(size){
        this.items=new Array(size);
        this.front=-1;
        this.rear=-1;
        this.size=size;
    }
    isEmpty(){
        return this.front == -1 && this.rear == -1
    }
    isFull(){
        return (this.rear+1) % this.size ===this.front;
    }
    enqueue(el)
    {
        
        if(this.isFull()){
            console.log("QUEUE FULL");
            return null;
    }
    if(this.isEmpty){
        this.front=0;
    }
    this.rear=(this.rear+1) % this.size;
    this.items[this.rear]=el;
}
dequeue()
{
    if(this.isEmpty()){
        console.log("QUEUE EMPTY");
        return
    }
    const removedItem=this.items[this.front];
    if(this.front===this.rear)
    {
        this.front=-1;
        this.rear=-1;
    }
    else{
        this.front=(this.front+1) % this.size;
    }
    return removedItem
}
display(){
    for(let i=this.front;i<=this.rear;i++)
    {
        console.log(this.items[i]);
    }
}
}
const queue=new CircularQueue(50);
queue.enqueue(10);
queue.enqueue(20);
queue.display();
queue.dequeue();
queue.display();



