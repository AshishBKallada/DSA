function buildHeap(arr)
{
    for(let i=Math.floor(arr.length/2)-2;i>=0;i--)
    {
        heapify(arr,i,arr.length);
    }
}
function insertToHeap(heap,value)
{
    heap.push(value);
    heapify(heap,0,heap.length);
}
function heapify(heap,i,heapsize)
{
    const l=2*i+1;
    const r=2*i+2;
    const largeIndex=i;

    if(l<heapsize && heap[l]>heap[largeIndex])
    {
        largeIndex=l;
    }
    if(r<heapsize && heap[r]<heap[largeIndex])
    {
        largeIndex=r;
    }
    if(largeIndex!==i)
    {
        [heap[i],heap[largeIndex]]=[heap[largeIndex],heap[i]];
        heapify(heap,largeIndex,heap.length)
    }
}
function removeFromHeap()
{
    if(heap.length==0){
        return null;
    }
    const maxValue=heap[0];
    let lastValue=heap.pop();
    if(heap.length>1)
    {
        heap[0]=lastValue;
        heapify(heap,0,heap.length);
    }
    return maxValue;
}
function search(item)
{
    for(let i=0; i<heap.length; i++)
    {
        if(heap[i]==item)
        {
            return true
        }
    }
    return false;
}
function printHeap(heap)
{
    for(let i=0; i<heap.length; i++)
    {
        console.log(heap[i]);
    }
}
