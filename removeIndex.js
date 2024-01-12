class Node{
    constructor(value){
     this.value = value;
     this.next = null;
    }
 }
 class LinkedList{
     constructor(value){
         this.head=value;
         this.size=0;
     }
     isEmpty()
     {
         return this.size===0;
     }
     getSize(){
         return this.size;
     }

     removeFrom(index){
        if(this.isEmpty())
        {
            console.log("LIST IS EMPTY");
            return;
        }
        if(index<0 || index>this.size)
        {
            return null;
        }
        let removeNode;
        if(index===0)
        {
            removeNode = this.head;
            this.head=this.head.next;
        }
        else{
               let curr=this.head;
               for(let i=0; i<index-1; i++){
                curr=curr.next;
        }
        removeNode=curr.next;
        curr.next=removeNode.next;
        }
this.size--;
return removeNode.value;

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

    
     print()
     {
         let curr=this.head;
         let listValue='';
         while(curr) 
         {
             if(curr)
             {
           listValue+=`${curr.value}`     
        curr=curr.next;
 
        
     }
         }
 
         console.log(listValue);
 
     }
 }
 
 const list = new LinkedList();
 