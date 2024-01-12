function linearsearch(arr,t)
{
    for(let i=0;i<arr.length;i++) {
        if(arr[i] === t)
        return i;
    }
    return -1;
}
const arr=[1,4,7,8];
console.log(linearsearch(arr,1));