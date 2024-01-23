// function Buidheap(heap)
// {
//     for(let i=Math.floor(heap.length/2)-1;i>=0;i--)
//     {
//         heapifyUp (heap,0)
//     }
// }
// function heapifyDown(heap,i){
//     const l=2*i+1;
//     const r=2*i+2;
//     let largeIndex=i;

//     if(l<heap.length && heap[l]>heap[largeIndex]){
//         largeIndex=l;
//     }
//     if(r<heap.length && heap[r]>heap[largeIndex]){
//         largeIndex=r;
//     }
//     if(largeIndex!==i)
//     {
//         [heap[largeIndex],heap[i]]=[heap[i],heap[largeIndex]]
//         heapifyDown(heap,largeIndex);
//     }
// }
// function insert(heap,value)
// {
//     heap.push(value);
//     heapifyUp(heap,heap.length-1);
// }

// function heapifyUp(heap,i)
// {
//     let parentIndex = Math.floor(i-1)/2;
//    if(parentIndex>=0 && heap[parentIndex]<heap[i]){
//        [heap[parentIndex],heap[i]]=[heap[i],heap[parentIndex]];
//        heapifyUp(heap,parentIndex);
//    }
// }
// function remove(heap)
// {
//     if(heap.length===0){
//         return null;
//     }
//     const maxValue=heap[0];
//     const lastValue=heap.pop();
//     if(heap.length!==0)
//     {
//         heap[0]=lastValue;
//         heapifyDown(heap,0);
//     }
//     return maxValue;
// }
// function display(heap)
// {
//     for(let i=0;i<heap.length;i++)
//     {
//         console.log(heap[i]);
//     }
// }
// const arr=[2,6,7,3,5,1]
// Buidheap(arr)
// console.log(arr);
// insert(arr,8)
// console.log(arr);
// remove(arr);
// console.log(arr);






aahigdhbbaagkkaaa




const hashtable = new HashTabl();
hashtable.insert("a","1")
hasttable.insert("a")