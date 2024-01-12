function binarySearch(arr,t)
{
  let leftIndex=0;
  let rightIndex=arr.length-1;
  while(leftIndex<=rightIndex){
    let mid=Math.floor((leftIndex+rightIndex)/2);

    if(arr[mid]===t){
      return mid;
    }
    else if(t<arr[mid]){
      rightIndex=mid-1;
    }
    else{
      leftIndex=mid+1;
    }
  }
  return -1;
}
console.log(binarySearch([10,20,30,40,50],50));