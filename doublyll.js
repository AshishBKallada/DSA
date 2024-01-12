class Node {
    constructor(data) {
        this.prev = null;
        this.data = data;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = null;
    }

    isEmpty() {
        return this.size === 0;
    }
    getSize() {
        return this.size;
    }

    append(data) {
        if (this.isEmpty()) {
            return null;
        }
        else {
            const newNode = new Node(data);
            newNode.next = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;

    }

    prepend(data) {
        if (this.isEmpty()) {
            return null;
        }
        else {
            const newNode = new Node(data);
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    }

    insertAfter(existingData, newData) {
        if (this.isEmpty()) {
            return null;
        }
        else {
            const newNode = new Node(existingData);
            let curr = this.head;
            while (curr) {
                if (curr.data === existingData) {
                    newNode.next = curr.prev.next;
                    newNode.prev = curr;
                    if (curr.next) {
                        curr.next.prev = newNode;
                    }
                    else {
                        this.tail = newNode;
                    }
                    curr.next = newNode;
                    this.size++;
                    break;
                }
                curr = curr.next;
            }
        }
    }

    delete(data) {
        if (this.isEmpty()) {
            return null;
        } else {
                 let curr=this.head;
                 const node=new Node(data);
                 while(curr)
                 {
                    if(curr.data===data)
                    {
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
                        break;
                    }
                    curr=curr.next;
                 }
        }
    }
}

