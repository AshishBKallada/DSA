// class Queue {
//     constructor() {
//         this.items = [];
//         this.front = 0;
//         this.rear = 0;
//     }
//     enqueue(item) {
//         this.items[this.rear] = item;
//         this.rear++;
//         return
//     }
//     dequeue() {
//         const removedELement=this.items[this.front];
//         delete this.items[this.front];
//         this.front++;
//         if (this.front > this.rear) {
//             this.front = 0;
//             this.rear = -1;
//         }

//         return removedELement;
//     }
//     peek(){
//         return this.items[this.front];
//     }
//     isEmpty(){
//         return this.items.length==0;
//     }
//     display(){
//         console.log(this.items);
//     }
// }
// const queue=new Queue();
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.display()
// console.log(queue.peek());
// queue.dequeue();
// queue.display()


class Queue{
    constructor(){
        this.items=[];
        this.front=0;
        this.rear=0;
    }
    enqueue(el)
    {
        this.items[this.rear]=el;
        this.rear++;
        return 
    }
    dequeue()
    {
        const item=this.items[this.front];
        delete this.items[this.front];
        if(this.front>this.rear){
            this.front=0;
            this.rear=0;
        }
        return item;
    }
    peek(){
        return this.items[this.front];
    }
    display(){
        console.log(this.items.toString());
    }
}
const queue = new Queue()
queue.enqueue(10);
queue.enqueue(20);
queue.display();
console.log(queue.peek());
queue.dequeue();
queue.display();