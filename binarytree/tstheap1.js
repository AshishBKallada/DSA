function buildHeap(heap)
{
    for(let i=Math.floor(heap.length/2)-1;i>0;i--)
    {
        heapify(heap,i,heap.length)
    }
}
function heapify(heap,i,heapsize)
{
    const l=2*i+1;
    const r=2+i+2;
    let largeIndex=i;
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
        [heap[largeIndex],heap[i]]=[heap[i],heap[largeIndex]]
        heapify(heap,largeIndex,heap.length)
    }
}
function removeFromHeap()
{
    if(heap.lemgth===0)
    {
        return null;
    }
    let maxValue=heap[0];
    let lastValue=heap.pop();
    if(heap.length>=1)
    {
       heap[0]=lastValue;
       heapify(heap,0,heap.length)  
    }
    return maxValue;
}
function search(item)
{
    for(let i=0;i<heap.length;i++)
    {
        if(heap[i]===item)
        {
            console.log("Item found");
            return true;
        }
    }
    return false; 
}
function printHeap(heap)
{
    for(let i=0;i<heap.length;i++)
    {
        console.log(heap[i]);
    }
}

function heapSort(arr) {
    // Build max heap
    buildHeap(arr);

    // Extract elements from the heap one by one
    for (let i = arr.length - 1; i > 0; i--) {
        // Swap the root (maximum value) with the last element
        [arr[0], arr[i]] = [arr[i], arr[0]];

        // Call heapify on the reduced heap
        heapify(arr, i, 0);
    }

    return arr;
}
