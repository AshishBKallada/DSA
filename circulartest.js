class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class Circular {
    constructor() {
        this.head = null;
        this.tail = null;
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
            this.tail = newNode;
            newNode.next=this.head;        }
        else {
            newNode.next = this.head;
            this.head = newNode;
            this.tail.next = this.head;
        }
        this.size++;
    }

    append(data) {
        const newNode = new Node(data);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next=this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
            this.tail.next = this.head
        }
        this.size++;

    }
    display() {
        let curr = this.head;
        let listValues = '';
        while (curr){
            listValues += ' ' + `${curr.data}`;
            curr = curr.next;
            if(curr===this.head)
            {
              break;            }
        }
        console.log('VALUES ARE'+listValues);
    }
    insertValue(index,data)
    {
        if(this.isEmpty())
        {
            this.head = newNode;
            this.tail = newNode;
            newNode.next=this.head;
        }
        else{

        }
    }
}

const list = new Circular()
list.prepend(10);
list.display();
list.append(20);
list.display();



// function arrayToList(array)
// {
//     const list=new Circular()
//     for(const item of array){
//         list.append(item);
//     }
//     return list;
// }