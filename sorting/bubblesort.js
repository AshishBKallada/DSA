function bubbleSort(arr)
{
    let swapped
    do{
  for(let i=0;i<arr.length-1;i++)
  {
     swapped=false;
    if(arr[i]> arr[i+1])
    {
        let temp=arr[i];
        arr[i]=arr[i+1];
        arr[i+1]=temp;
        swapped=true;
    }
  }
}while(swapped)
return arr;
}
console.log(bubbleSort([5,-3,2,0]));