class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
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

    prepend(value) {
        const node = new Node(value);

        if (this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = node;
        }
        this.size++;
    }

    insert(value, index) {
        if (index < 0 || index > this.size) {
            return;
        }
        if (index === 0) {
            this.prepend(value);
        } else {
            const node = new Node(value);
            let curr = this.head;
            for (let i = 0; i < index - 1; i++) {
                curr = curr.next;
            }
            node.next = curr.next;
            curr.next = node;
        }
        this.size++;
    }

    removeFrom(index) {
        if (this.isEmpty()) {
            console.log("LIST IS EMPTY");
            return null;
        }
        if (index < 0 || index >= this.size) {
            return null;
        }
        let removeNode;
        if (index === 0) {
            removeNode = this.head;
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
        return removeNode.value;
    }

    removeValue(value) {
        if (this.isEmpty()) {
            return null;
        }
        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return value;
        } else {
            let curr = this.head;
            let removeNode;
            while (curr.next && curr.next.value !== value) {
                curr = curr.next;
            }
            if (curr.next && curr.next.value === value) {
                removeNode = curr.next;
                curr.next = removeNode.next;
                this.size--;
                return value;
            }
            return null;
        }
    }

    print() {
        let curr = this.head;
        let listValue = '';
        while (curr) {
            listValue += `${curr.value}`;
            curr = curr.next;
            if (curr) {
                listValue += ' -> ';
            }
        }
        console.log(listValue);
    }
}

const list = new LinkedList();
list.prepend(10);
list.print();

list.append(30);
list.print();

list.insert(20, 1);
list.print();

list.removeFrom(1)
list.print();

list.removeValue(10)
list.print();

