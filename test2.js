class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class DoublyLinkedList{
    constructor(data){
        this.head=null;
        this.tail=null;
        this.size=0;
    }
    isEmpty(){
        return this.size==0;
    }
    getSize(){
        return this.size;
    }
    prepend(data)
    {
        const newNode=new Node(data);
        if(this.isEmpty())
        {
            this.head=newNode;
            this.tail=newNode;
        }
        else{
            newNode.next=this.head;
            this.head.prev=newNode;
            this.head=newNode;
        }
        this.size++;

    }
    append(data){
        const newNode=new Node(data);
        if(this.isEmpty()){
            this.head=newNode;
            this.tail=newNode;
        }else{
            this.tail.next=newNode;
            newNode.prev=this.tail;
            this.tail=newNode;
        }
        this.size++;
    }
    insertAfter(index,data){
        const newNode=new Node(data);
        if(this.isEmpty()){
            this.head=newNode;
            this.tail=newNode;
        }
        else{
            let curr=this.head;
            for(let i=0;i<index-1;i++)
            {
                curr=curr.next;
            }
            newNode.next=curr.next;
            newNode.prev=curr;
            if(curr.next){
                curr.next.prev=newNode;
            }
            curr.next=newNode;
           
        } 
        this.size++;
    }
    insertAfterValue(value,data)
    {
        const newNode=new Node(data);
        if(this.isEmpty()){
            this.head=newNode;
            this.tail=newNode;
        }else{
            let curr=this.head;
            while(curr && curr.data!==value)
            {
                curr=curr.next;
            }
            newNode.next=curr.next;
            newNode.prev=curr;
            if(curr.next){
                curr.next.prev=newNode;
            }
            curr.next=newNode;
           
        } 
        this.size++;
    }

    remove(data){
        if(this.isEmpty()){
            console.log("LL Empty");
            return;
        }
        

        let curr=this.head;
        while(curr.data!==data)
        {
                 curr=curr.next;
        }
        
        if(curr.prev){
            curr.prev.next=curr.next;
        }
        else{
            this.head=curr.next;
        }

        if(curr.next){
            curr.next.prev=curr.prev;
        }
        else{
            this.tail=curr.prev;
        }
        this.size--;

    }
    search(data)
    {
        if(this.isEmpty()){
            console.log("LL Empty");
            return;
        }
        let curr=this.head;
        let count=0;
        while(curr)
        {
            if(curr.data===data)
            {
                console.log("Search item found at index " + count);
                return true;
            }
            count++;
            curr=curr.next;
            
        }  
            console.log("Item not found"+data);
            return false;
    }
    display()
    {
        if(this.isEmpty()){
            console.log("LL Empty");
            return;
        }
        let curr=this.head;
        while(curr)
        {
            console.log(curr.data);
            curr=curr.next;
        }
        console.log("\n");
    }
}

const list =new DoublyLinkedList();
list.display();
list.prepend(10);
list.display();

list.append(30);
list.display();

list.insertAfter(0,20);
list.display();

list.insertAfterValue(20,20);
list.display();

list.remove(20);
list.display();

list.remove(20);
list.display();

list.search(30);


