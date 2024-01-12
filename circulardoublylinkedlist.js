class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.size=0;
    }
     isEmpty()
     {
      return this.size === 0;
    }
 getSize() {
    return this.size;
}

append(data)
{
    
         
    const newNode = new Node(data);
    let curr = this.head;
    while (curr.next) {
        curr = curr.next;
    }
    curr.next = newNode;
    this.size++;

}
prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    console.log(this);
  }

  insertAfter(index,data)
  {
    if (this.isEmpty()) {
        console.log("LL Empty");
        return null;
    }
    const newNode=new Node(data);
   let curr=this.head;
for(let i=0;i<index-1;i++){
    curr=curr.next;
}
curr.next=newNode;
this.size++;
}

deletebeg()
{
    if (this.isEmpty()) {
        console.log("LL Empty");
        return null;
    }
    this.head=this.head.next;
    this.size--;
    
}

deleteEnd() {
    if (this.isEmpty()) {
        console.log("LL Empty");
        return;
    }

    if (!this.head.next) {
        this.head = null;
    } else {
        let curr = this.head;
        let prev = null;
        while (curr.next) {
            prev = curr;
            curr = curr.next;
        }

        prev.next = null;
    }

    this.size--;
}
delete(data)
{
    if (this.isEmpty()) {
        console.log("LL Empty");
        return;
    }
    let curr=this.head;
    while(curr.next && curr.next.data!==data)
    {
        curr=curr.next;
    } 
    curr.next=curr.next.next;
}
search(data)
{
    if (this.isEmpty()) {
        console.log("LL Empty");
        return;
    }
    
    curr=this.head;
    while(curr)
{
    if(curr.data===data){
        console.log("Search item present");
        return true;
    }
    curr=curr.next;
}
console.log("Item not found");
return false;
}
display()
{
   
    let curr=this.head;
    while(curr)
    {
        console.log(curr.data);
        curr=curr.next;
    }

}

}
const list=new SinglyLinkedList();
list.display();

list.prepend(10);
list.display();

list.append(20);
list.display();






