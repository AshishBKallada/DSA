function mergeSort(arr)
{
    if(arr.length<2)
    {
        return arr;
    }
    const mid=Math.floor(arr.length/2);
    const leftArr=arr.slice(0,mid)
    const rightArr=arr.slice(mid);
    return merge(mergeSort(leftArr),mergeSort(rightArr));
}
function merge(leftArr,rightArr)
{
    const sortedArr=[];
    while(leftArr.length>0 && rightArr.length>0)
    {
        if(leftArr[0]<rightArr[0])
        {
            sortedArr.push(leftArr.shift());
        }else{
            sortedArr.push(rightArr.shift()); 
        }
    }
    return sortedArr.concat(leftArr,rightArr);
}
console.log(mergeSort([3,-4,5,-7,0]));