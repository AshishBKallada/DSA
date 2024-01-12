class DoubleEndedQueue{
    constructor()
    {
        this.items=[];
        this.rear=-1;
        this.front=-1;
        this.size=0;
    }
    addRear(el)
    {
        if(this.isEmpty())
        {
            this.front=0
        }
        this.rear++;
        this.items[this.rear]=el;
    }
    removeRear(){
        const item=this.items[this.rear];
        this.rear--;
        return item;
    }
    addFront(el) {
        if (this.isEmpty()) {
            this.front = 0;
            this.items[this.front] = el;
        } else {
            this.front--;
            this.items[this.front] = el;
        }
    }
    
    removeFront(){
        const item=this.items[this.front];
        this.front++;
        return item;
    }
    display(){
        console.log(this.items);
    }
    isEmpty()
    {
        return this.front=== -1 && this.rear===-1;
    }
 
}
const queue=new DoubleEndedQueue();
queue.addFront(10);
queue.addFront(20);
queue.display();