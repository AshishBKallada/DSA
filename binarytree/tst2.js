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
    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
        }
        this.insertNode(this.root, newNode)
    }

    insertNode(node, newNode) {
        if (!node) {
            return null;
        }
        if (newNode.value < node.value) {
            if (!node.left) {
                node.left = newNode;
            }
            else {
                return this.insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            }
            else {
                return this.insertNode(node.right, newNode);
            }
        }
    }

    contains(node = this.root, value) {
        if (!node) {
            return false;
        }
        if (node.value === value) return true;
        if (value < node.value) {
            return this.contains(node.left, value);
        } else {
            return this.contains(node.right, value);
        }
    }
    preorder(node = this.root) {
        if(!node)
        {
            return null;
        }
        console.log(node.value);
        this.preorder(node.left);
        this.preorder(node.right);
    }
    inorder(node = this.root) {
        if(!node)
        {
            return null;
        }
        this.inorder(node.left);
        console.log(node.value);
        this.inorder(node.right);
    }
    postorder(node = this.root) {
        if(!node)
        {
            return null;
        }
        this.postorder(node.left);
        this.postorder(node.right);
        console.log(node.value);
    }
    findMin(node = this.root) {
        if (!node) {
            return null;
        }
        else {
            while (node.left) {
                node = node.left;
            }
            return node.value;
        }
    }
    findMax(node = this.root) {
        if (!node) {
            return null;
        }
        else {
            while (node.right) {
                node = node.right;
            }
            return node.value;
        }
    }
    validateBST(node = this.root) {
        return isValid(node, -Infinity, Infinity)
    }
    isValid(node, min, max) {
        if (!node) {
            return true;
        }
        if (node.value < min || node.value > max) {
            return false;
        }
        return this.isValid(node, min, node.value) && this.isValid(node, node.value, max)
    }
    closest(target) {
        return this.findClosest(this.root, target, Infinity)
    }
    findClosest(node, target, closest) {
        if(!node)
        {
            return null;
        }
        if(Math.abs(node.value-target)<(closest-target))
        {
            closest=node.value;
        }
        if(target<node.value){
            return this.closest(node.left,target,closest);
        }
        else if(target>node.value){
            return this.closest(node.right,target,closest)
        }else{
            return closest;
        }
    }
}