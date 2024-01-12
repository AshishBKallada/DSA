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
    insert() {
        const newNode = new Node();
        if (this.root) {
            this.root = newNode;
        }
        else {
            this.insertNode(this.root, newNode);
        }
    }
    insertNode(node, newNode) {
        if (newNode.value > node.value) {
            if (!this.left) {
                this.left = newNode;
            }
            else {
                return this.insertNode(node.left, newNode)
            }
        }
        else {
            if (!this.right) {
                this.right = newNode;
            }
            else {
                return this.insertNode(node.right, newNode)
            }
        }
    }
    finMin() {
        let node = this.root;
        if (!node) {
            return null;
        }
        while (node.left) {
            node = node.left;
        }
        return node.value;
    }
    finMax() {
        let node = this.root;
        if (!node) {
            return null;
        }
        while (node.right) {
            node = node.right;
        }
        return node.value;
    }
    contains(value) {
        let node = this.root;
        if (!node) {
            return false;
        }
        if (value === node.value) return node.value;
        if (value < node.value) {
            this.contains(node.left);
        }
        else {
            this.contains(node.right);
        }
    }
    inorder(node=this.root)
    {
        this.inorder(node.left);
        console.log(node.value);
        this.inorder(node.right);
    }
    validate()
    {
    return this.isValid(this.root,-Infinity,Infinity);
    }
    isValid(node,min,max)
    {
        if(!node) return null;
        if(node.value < min || node.value > max)
        return false;
        return this.isValid(node.left,min,node.value) && this.isValid(node.right,node.value,max)
    }

    closest(value)
    {
        return this.closestValue(this.root,value,Infinity)
    }
    closestValue(node,target,closest)
    {
        if(!node)
        {
            return closest;
        } 
        if(Math.abs(node.value-closest)>(closest-target)){
            closest =node.value;
        }
        if(value<node.value)
        {
            return this.closestValue(this.left,target,closest)
        }
        else if(value>node.value)
        {
            return this.closestValue(this.right,target,closest)
        }
        else{
            return closest; 
        }
    }
}