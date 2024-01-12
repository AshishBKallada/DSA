function buildHeap(heap){
    for(let i=Math.floor(heap.length/2)-1;i>0;i--){
        heapify(heap,i,heap.length)
    }
}
heapify(heap,i,heapsize)
{
    const l=2*i+1;
    const r=2*i+2;
    const largeIndex=i;

    if(l<heapsize && heap[l]>heap[heapsize])
    {
        largeIndex=l;
    }
    if(r<heapsize && heap[r]<heap[heapsize])
    {
        largeIndex=r;
    }
    if(largeIndex!==i){
        [heap[l],heap[largeIndex]]=[heap[largeIndex],heap[r]]
        heapify(heap,largeIndex,heap.length)
    }
}
insertToHeap(heap,value)
{
    heap.push(value);
    heapify(heap,0,heap.length)
}
removeFromHeap()
{
    if(heap.length===0)
    {
        return null;
    }
    const maxValue=heap[0];
    const lastValue=heap.pop();

    if(heap.length>1)
    {
        heap[0]=lastValue;
        heapify(heap,0,heap.length)
    }
    return maxValue;
}
search(value)
{
    for(let i=0; i<heap.length; i++){
        if(heap[i]===value)
        {
            return true;
        }
    }
    return false;
}