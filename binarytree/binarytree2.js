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
        const newNode = new Node(value)
        if (!this.root) {
            this.root = newNode
        }
        else {
            this.insertNode(this.root, newNode)
        }
    }
    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (!node.left) {
                node.left = newNode
            }
            else {
                return this.insertNode(node.left, newNode)
            }
        }
        else {
            if (!node.right) {
                node.right = newNode
            }
            else {
                return this.insertNode(node.right, newNode)
            }
        }
    }
    remove(value) {
        this.root = this._removeNode(this.root, value);
      }
    
      _removeNode(node, value) {
        if (!node) {
          return null;
        }
    
        if (value < node.value) {
          node.left = this._removeNode(node.left, value);
        } else if (value > node.key) {
          node.right = this._removeNode(node.right, value);
        } else {
          if (!node.left) {
            return node.right;
          } else if (!node.right) {
            return node.left;
          }
          node.value = this._findMin(node.right).value;
          node.right = this._removeNode(node.right, node.value);
        }
    
        return node;
      }
    
      _findMin(node) {
        while (node.left) {
          node = node.left;
        }
        return node;
      }
    findMin() {
        const node = this.root;
        if (!node) {
            return null;
        }
        while (node.left) {
            node.left = node.left;
        }
        return node.value;
    }
    findMax() {
        const node = this.root;
        if (!node) {
            return null;
        }
        while (node.right) {
            node.right = node.right;
        }
        return node.value;
    }
    contains(node = this.root, value) {
        if (!node) {
            return null;
        }
        if (node.value === value) {
            return true;
        }
        else if (value < node.value) {
            return this.contains(node.left, value);
        }
        else (value > node.value) {
            return this.contains(node.right, value);
        }
    }
    preorder(node = this.root) {
        console.log(node.value);
        this.preorder(node.left);
        this.preorder(node.right);
    }
    postorder(node = this.root) {
        this.postorder(node.left);
        this.postorder(node.right);
        console.log(node.value);
    }
    inorder(node = this.root) {
        this.inorder(node.left);
        console.log(node.value);
        this.inorder(node.right);
    }
    bstvalidation()
    {
        return this.isValid(this.root,-Infinity,Infinity)
    }
    isValid(node,min,max)
    {
        if(!node)
        {
            return true
        }
        if(node.value < min || node.value > max)
        {
            return false;
        }
        return this.isValid(node.left,min,node.value) && this.isValid(node.right,node.value,max);
    }
    closest(value)
    {
        return this.findClosest(this.root,value,Infinity);
    }
    findClosest(node,target,closest)
    {
        if(!node)
        {
            return null;
        }
        if(Math.abs(node.value - target) < closest)
        {
            closest =node.valkue;
        }
        if(target<node.value)
        {
            return this.findClosest(node.left,target,closest)
        }
        else if(target>node.value)
        {
            return this.findClosest(node.right,target,closest)
        }
        else{
            return closest;
        }
    }
   bfs()
   {
    const result=[];
    const queue=[];
    if(this.root)
    {
       queue.push(this.root)
       while(queue.length!==0)
       {
        const node=queue.shift();
        result.push(node.value)
        if(node.left){
            queue.push(node.left)
        }
        if(node.right){
            queue.push(node.right)
        }
       }
    }
    return result;
   }

}