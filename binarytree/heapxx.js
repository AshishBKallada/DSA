// buildHeap(arr)
// {
//     for(let i=Math.floor(arr.length/2)-1;i>=0;i--)
//     {
//         heapify(arr,i,arr.length)
//     }
// }
// heapifyDown(heap,i,heapsize)
// {
//   const l=2*i+1;
//   const r=2*i+2;
//   let largeIndex=i;
//   if(l<heapsize && heap[l>heap[largeIndex]])
//   {
//     largeIndex=l;
//   }
//   if(r<heapsize && heap[r>heap[largeIndex]])
//   {
//     largeIndex=r;
//   }
//   if(!largeIndex==i)
//   {
//   [heap[largeIndex], heap[i]]=[heap[i],heap[largeIndex]];
//   heapifyDown(heap,largeIndex,heap.length)
//   }
// }
// insert(heap,value)
// {
//     heap.push(value);
//     heapifyUp(heap,heap.length-1);
// }
// heapifyUp(heap,i)
// {
//     const parentIndex=Math.floor(i-1)/2;
//     if(parentIndex>=0 && heap[parentIndex]>heap[i])
//     {
//         [heap[parentIndex],heap[i]]=[heap[i],heap[parentIndex]];
//         heapifyUp(heap,parentIndex);
//     }
// }
// remove(heap)
// {
//     const maxValue=heap[0];
//     let lastValue=heap.pop();
//     if(heap.length>0)
//     {
//         heap[0]=lastValue;
//         heapifyDown(heap,0,heap.length);
//     }
//     return maxValue;
// }
// heapSort(heap)
// {
//    buildHeap(heap);
//    for(let i=heap.length-1;i>0; i--)
//    {
//     [heap[i],heap[0]]=[heap[0],heap[i]];
//     heapifyDown(heap,0,i)
//    }
// }





// function dfshelper=(vertex)={
//     const visited=new Set();
//     if(!visited.has(vertex))
//     {
//         visited.add(vertex);
//         const adjacents=this.adjacencyList[vertex];
//         for( const adjacent of adjacents )
//         {
//             if(!visited.has(adjacent))
//             {
//                 vi
//             }
//         }
//     }
// }



findMin()
{
    let node = this.root;
    while (node.left) {
        node = node.left
    }
    return node.value
}
insert(value)
{
    this.insertNode(this.root, value);
}

insertNode(node, value)
{
    const newNode = new Node();
    if (!this.root) {
        this.root = newNode;
    }
    else {
        return this.insertNode(newNode, node)
    }
}
insertNode(newNode, node)
{
    if (!node) {
        return null;
    }
    if (newNode.value < node.value) {
        if (!node.left) {
            node.left = newNode;
        }
        else {
            return this.insertNode(newNode, node.left)
        }
    }
    else {
        if (!node.right) {
            node.right = newNode;
        }
        else {
            return this.insertNode(newNode, node.right)
        }
    }
}


const arr=[2,4,8,3,3,0];

