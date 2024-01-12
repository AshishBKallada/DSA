class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class LinkedList{
    constructor(value){
        this.head=null;
        this.size=0;
    }
    isEmpty(){
        return this.size===0;
    }
    getSize(){
        return this.size();
    }
    removevalue(value){
        if(this.isEmpty)
        {
            return null;
        }
        if(this.head.value===value)
        {
            this.head=this.head.next;
            this.size--;
            return value;
        }else{
            let curr=this.head;
            while(curr.next && curr.next!==value)
            {
                curr=curr.next;
            }
            if(curr.next)
            {
                removeNode=curr.next;
                curr.next=removeNode.next;
                this.size--;
                return value;
            }
            return null;
        }
    }
}
const list=new LinkedList();
