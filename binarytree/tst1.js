class node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinartSearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new Node(value)
        if (!this.root) {
            this.root = newNode;
        }
        else {
             this.insertNode(this.root, newNode)
        }
    }
    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode)
            }
        }
        else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode)
            }
        }
    }
    contains(node = this.root, value) {
        if (!node) {
            return false;
        }
        if (node.value === value) {
            return true;
        }
        else if (value < node.value) {
            return this.contains(node.left, value)
        }
        else {
            return this.contains(node.right, value)
        }
    }

    min(node=this.root)
    {
        if(!node)
        {
            return null;
        }
        else{
            while(node.left)
            {
                node=node.left;
            }
            return node.value;
        }
    }
    max(node=this.root)
    {
        if(!node)
        {
            return null;
        }
        else{
            while(node.right)
            {
                node=node.right;
            }
            return node.value;
        }
    }
    preorder(node=this.root){
        console.log(node.value);
        this.preorder(node.left);
        this.preorder(node.right);
    }
    inorder(node) {
        if (!node) return;
        this.inorder(node.left);
        console.log(node.value);
        this.inorder(node.right);
    }

    postorder(node) {
        if (!node) return;
        this.postorder(node.left);
        this.postorder(node.right);
        console.log(node.value);
    }

    validateBST()
    {
        return this.isValid(this.root,-Infinity,Infinity);
    }
    isValid(node,min,max){
      if(!node)
      {
        return true;
      }
      if(node.value<min ||node.value>max)
      {
        return false;
      }
      return this.isValid(node,min,node.value) && this.isValid(node,node.value,max);
    }

    closest(target)
    {
        return this.recursiveClosest(this.root,target,Infinity)
    }
    recursiveClosest(node,target,closest)
    {
        if(!node)
        {
            return closest;
        }
        if(Math.abs(node.value-closest) < Math.abs(closest-target)){
            closest=node.value;
        }
        if(target<node.value)
        {
            return this.recursiveClosest(node.left,target,closest);
        }
        else if(target>node.value)
        {
            return this.recursiveClosest(node.right,target,closest);
        }
        else{
            return closest;
        }
    }
}