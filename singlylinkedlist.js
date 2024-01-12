class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class singlyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    isEmpty() {
        return this.size === 0;
    }
    getSize() {
        return this.size;
    }
    prepend(data) {
        const newNode = new Node(data);
        if (this.isEmpty()) {
            this.head = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }
    display() {
        if (this.isEmpty()) {
            console.log("LIST EMPTY");
        } else {
            let curr = this.head;
            let listValues = '';
            while (curr) {
                listValues += ' ' + ` ${curr.data}`
                curr = curr.next
            }
            console.log(listValues);
        }
    }

    append(data) {
        const newNode = new Node(data);
        if (this.isEmpty()) {
            this.head = newNode;
        }
        else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = newNode;
        }
        this.size++;
    }
    insertAtIndex(data, index) {
        if (index < 0 || index > this.size) {
            return
        }
        if (index === 0) {
            this.prepend(data);
        } else {
            const newNode = new Node(data);
            let curr = this.head;
            for (let i = 0; i < index - 1; i++) {
                curr = curr.next;
            }
            newNode.next = curr.next;
            curr.next = newNode;
            this.size++;
        }
    }
    removeFrom(index) {
        let removeNode;
        if (index < 0 || index > this.size) {
            return null;
        }
        if (index === 0) {
            this.head = this.head.next;
        } else {
            let curr = this.head;
            for (let i = 0; i < index - 1; i++) {
                curr = curr.next;
            }
            removeNode = curr.next;
            curr.next = removeNode.next;
        }
        this.size--;

    }
    removeValue(data) {
        let removeNode;
        if (this.isEmpty()) {
            return null;
        }
        if (this.head.data === data) {
            this.head = this.head.next;
        } else {
            let curr = this.head;
            while (curr.next.data !== data) {
                curr = curr.next;
            }
            removeNode = curr.next;
            curr.next = removeNode.next;
        }
        this.size--;

    }
    search(data){
        if (this.isEmpty()) {
            return -1;
        }
        let curr=this.head;
        let i=0
        while(curr)
        {
            if(curr.data===data)
            {
                console.log("Search item found at:"+i);
                return ;
            }
            curr=curr.next;
            i++;
        } 
        return -1;
    }
    reverse(){
       let next=null;
       let prev=null;
       let  curr=this.head;
        while(curr){
            next=curr.next;
            curr.next=prev;
            prev=curr;
            curr=next;
        }
        this.head=prev;
    }
}
const list = new singlyLinkedList();
console.log(list.isEmpty());
console.log(list.getSize());

list.display();
list.prepend(20);
list.display();
list.prepend(10);
list.display();
list.append(30);
list.display();
list.insertAtIndex(40, 2);
list.display();
list.removeFrom(2);
list.display();
list.removeValue(20); 
list.display();
list.search(10);
list.reverse();
list.display();





