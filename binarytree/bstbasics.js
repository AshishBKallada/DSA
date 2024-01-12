class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    isEmpty() {
        return this.root === null;
    }
    insert(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode)
        }
    }
    insertNode(root, newNode) {
        if (root.value > newNode.value) {
            if (root.left === null) {
                root.left = newNode
            }
            else {
                this.insertNode(root.left, newNode)
            }
        }
        else {
            if (root.right === null) {
                root.right = newNode
            }
            else {
                this.insertNode(root.right, newNode)
            }
        }
    }
    search(root, value) {
        if (!root) {
            return false
        }
        else {
            if (root.value === value) {
                return true;
            }
            else if (root.value > value) {
                return this.search(root.left, value)
            }
            else {
                return this.search(root.right, value)
            }
        }

    }
    preorder(root) {
        if (root) {
            console.log(root.value);
            this.preorder(root.left)
            this.preorder(root.right)
        }
    }
    inorder(root) {
        if (root) {
            this.inorder(root.left)
            console.log(root.value)
            this.inorder(root.right)
        }
    }
    postorder(root) {
        if (root) {
            this.preorder(root.left)
            this.postorder(root.right)
            console.log(root.value);
        }
    }
    levelOrder() {
        const queue = [];
        queue.push(this.root)
        while (queue.length) {
            const curr = queue.shift()
            console.log(curr.value);
            if (curr.left) {
                queue.push(curr.left)
            }
            if (curr.right) {
                queue.push(curr.right)
            }
        }
    }
    min(root)
    {
        if(!root.left)
        {
            return root.value;
        }else{
            return this.min(root.left);
        }
    }
    max(root)
    {
        if(!root.right)
        {
            return root.value;
        }else{
            return this.max(root.right);
        }
    }
}
    const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
console.log(bst.search(10));
bst.preorder(bst.root)
console.log("///////////////////");
bst.inorder(bst.root)
console.log("///////////////////");
bst.postorder(bst.root)
console.log("///////////////////");
bst.levelOrder()
console.log("///////////////////");
console.log(bst.min(bst.root));
console.log("///////////////////");
console.log(bst.max(bst.root));



