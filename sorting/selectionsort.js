function selectionSort(arr)
{
    for(let i=0;i<arr.length;i++)
    {
        let minIndex=i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j] < arr[minIndex])
            {
                minIndex=j;
            }
        }
        let temp=arr[minIndex];
        arr[minIndex]=arr[i];
        arr[i]=temp;
    }
    return arr;
}
console.log(selectionSort([3,-2,4,0,5,-6]));