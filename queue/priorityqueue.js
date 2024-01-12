// class PriorityQueue{
//     constructor()
//     {
//         this.queue=[];
//         this.front=0;
//         this.rear=0;
//     }
//     enqueue(element,priority)
//     {
//         const newElement={element,priority};
//         if(this.isEmpty()){
//             this.queue[this.rear]=newElement;
//         }else{
//         let added=false;
//         for(let i=this.front; i<this.rear;i++)
//         {
//             if(newElement.priority<this.queue[i].priority)
//             {
//                 this.queue.splice(i,0,newElement);
//                 added=true;
//                 break;
//             }
//         }
//         if(!added)
//         {
//             this.queue[this.rear]=newElement;
//         }
//     }
//     this.rear++;
// }
// dequeue()
// {
//     if(this.isEmpty())
//     {
//         return "QUEUE EMPTY";
//     }
//    const removedElement=this.queue[this.front];
//    this.front++;

//    if(this.front>this.rear)
//    {
//     this.rear=0;
//     this.front=0;
//    }
//    return removedElement;
// }
// peek()
// {
//     if(this.isEmpty())
//     {
//         return ;
//     }
//     return this.queue[this.front].element;
// }
// isEmpty(){
//     return this.front===this.rear;
// }
// display()
// {
//     if(this.isEmpty())
//     {
//         console.log("Empty queue");
//         return ;
//     }else{
//         console.log(this.queue.map(item=>`${item.element}=>${item.priority}`).join(' '));
//     } 
// }
// }
// const queue=new PriorityQueue()
// queue.display();
// queue.enqueue(10,6);
// queue.enqueue(20,8);
// queue.enqueue(30,4);
// queue.display();
// queue.dequeue();
// console.log(queue.peek());
// queue.display();



class Queue{
    constructor(){
        this.items=[];
        this.rear=0;
        this.front=0;
    }
   enqueue(element,priority)
   {
    const newElement={element,priority}
    if(this.isEmpty())
    {
        this.items[this.rear]=newElement;
    }
    else{
        let added=false;
        for(let i=this.front;i<this.rear;i++)
        {
            if(newElement.priority<this.items[i].priority)
            {
                this.items.splice(i,0,newElement);
                added=true;
                break;
            }
        }
        if(!added)
        {
            this.items[this.rear]=newElement;
        }
    }
    this.rear++
   }
    dequeue()
    {
        if(this.isEmpty())
        {
            return null;
        }
        const removedItem=this.items[this.front];
        delete this.items[this.front]; 
        this.front++;
        if(this.front>this.rear)
        {
            this.front=0;
            this.rear=0;
        }
        return removedItem;
    }
    peek()
    {
        return this.items[this.front];
    }
    display()
    {
        if(this.isEmpty())
        {
            console.log("Empty queue");
            return ;
        }else{
            console.log(this.items.map(item=>`${item.element}=>${item.priority}`).join(' '));
        } 
    }
    
    isEmpty(){
        return this.rear===this.front;
    }
}
const queue = new Queue();
queue.enqueue(10,6)
queue.enqueue(20,8)
queue.display()
queue.dequeue()
queue.display()



