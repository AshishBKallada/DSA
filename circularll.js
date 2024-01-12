class Node{
    constructor(value){
        this.data=value;
        this.next=null;
    }
}

class CircularLinkedList{
      constructor(){
        this.head=null;
      }
    
      prepend(value){
        const newNode=new Node(value);

        if(!this.head){
            this.head=newNode;
            newNode.next=this.head;
        }
        
        else{
            let curr=this.head;
            while(curr.next!==this.head)
            {
                curr=curr.next;
            }
            newNode.next=this.head;
            curr.next=newNode;
            this.head=newNode;
        }
      }
      append(value) {
        const newNode = new Node(value);
        if (!this.head) {
          this.head = newNode;
          newNode.next = this.head;
        } else {
          let curr = this.head;
          while (curr.next !== this.head) {
            curr = curr.next;
          }
          curr.next = newNode;
          newNode.next = this.head;
        }
      }
      display() {
        if (!this.head) {
          console.log("LIST IS EMPTY");
        } else {
          let curr = this.head;
          do {
            console.log(curr.data);
            curr = curr.next;
          } while (curr !== this.head);
        }
      }
      

    }
 

const list=new CircularLinkedList();
list.display();
list.prepend(10);
list.display();

list.append(20);
list.display();
