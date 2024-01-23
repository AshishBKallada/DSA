class Node{
    constructor(value)
    {
        this.value = value;
        this.left=null;
        this.right=null;
    }
}
class BST{
    constructor()
    {
        this.root=null;
    }
    insert(value)
    {
        const newNode=new Node(value);
        if(!this.root)
        {
            this.root=newNode
        }
        else{
            this.insertNode(this.root,newNode);
        }
    }
    insertNode(node,newNode)
    {
        if(!node)
        {
            return null;
        }
        if(newNode.value<node.value)
        {
            if(!this.left)
            {
                this.left=newNode
            }
            else{
                return this.insertNode(this.left,newNode);
            }
        }
        else{
            if(!node.right)
            {
                this.right=newNode
            }else{
                return this.insertNode(this.right,newNode);
            }
        }
    }
    contains(node=this.rootvalue)
    {
        if(!node)
        {
            return null;
        }
        if(value===node.value)return true;
        if(value<node.left)return this.contains(node.left);
        else if(value>node.right)return this.contains(node.right);
    }
    preorder(node=this.root)
    {
        console.log(node.vale);
        this.preorder(node.left);
        this.postorder(node.right);
    }
    validateBst()
    {
        return this.isValid(this.root,-Infinity,Infinity)
    }
    isValid(node,min,max)
    {
        if(!node)
        {
            return true;
        }
        if(node.value < min || node.value > max){
            return false;
        }
        return this.isValid(node.left,min,node.value) && this.isValid(node.right,nodde.value,max)
    }
    closest(value)
    {
        return this.findClosest(this.root,value,Infinity)
    }
    findClosest(node,target,closest)
    {
        if(!node){
            return closest;
        }
        if(Math.abs(node.value-target)<closest)
        {
            closest=node.value;
        }
        if(value<node.value)
        {
            return this.findClosest(node.left,target,closest);
        }
        else if(value>node.value)
        {
            return this.findClosest(node.right,target,closest);
        }else{
            return closest;
        }
    }
    bfs()
    {
        const result=[];
        const queue = [];
        if(this.root)
        {
            queue.push(this.root);
            while(queue.length!==0){
                const node=queue.shift();
                result.push(node.value);
                if(node.left)
                {
                    queue.push(node.left);
                }
                if(node.right)
                {
                    queue.push(node.right);
                }
            }
        }
        return result;
    }
    remove(value)
    {
        this.root=this.removeNode(this.root,value);
    }
    removeNode(node,value)
    {
        if(!node)
        {
            return null;
        }
        if(value<node.value)
        {
            node.left=this.removeNode(node.left,value);
        }
        else if(value>node.right)
        {
            node.right=this.removeNode(node.right,value);
        }
        else{
            if(!node.left)
            {
                return node.right;
            }
            else{
                return node.left;
            }
            node.value=this.findMin(node.right).value;
            node.right=this.removeNode(node.right,node.value);
        }
        return node;
    }
}