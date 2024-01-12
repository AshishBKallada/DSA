function multiply(arr,index=0)
{
    if(index===arr.length){
        return 1;
    }
    return arr[index]*multiply(arr,index+1);
}
console.log(multiply([2,3,4,5])); 

// function rangeOfNumbers(startNum,endNum){
//     if(startNum>endNum){
//         return
//     }
//     console.log(startNum);
//     startNum +=1;
//     return rangeOfNumbers(startNum,endNum);

// }

// rangeOfNumbers(0,5);

// function fibonacci(n)
// {
//         if(n<=1)
//         {
//             console.log(n);

//             return n;
//         }
//         console.log(n);

//     return fibonacci(n-1)+fibonacci(n-2);
// }
// fibonacci(5);

// function reverseString(str)
// {
//     if(str==="")
//     {
//         return "";
//     }
//     return reverseString(str.substring(1))+str.charAt(0);
// }
// console.log(reverseString("hello"));

// function findSubsets(arr, index = 0, currentSubset = [], subsets = []) {
//     if (index === arr.length) {
//         subsets.push([...currentSubset]);
//         return;
//     }

//     currentSubset.push(arr[index]);
//     findSubsets(arr, index + 1, currentSubset, subsets);

//     currentSubset.pop();
//     findSubsets(arr, index + 1, currentSubset, subsets);

//     return subsets;
// }

// const inputArray = [1, 2, 3];
// const result = findSubsets(inputArray);
// console.log(result);

// function binaryRecursive(arr,t,start=0,end=arr.length-1){
//     if(start>end)
//     {
//         return -1;
//     }
//     const mid=Math.floor((start+end)/2);
//     if(t===arr[mid]){
//         return mid;
//     }
//     else if(t>arr[mid])
//     {
//         return binaryRecursive(arr,t,mid+1,end);
//     }
//     else{
//         return binaryRecursive(arr,t,start,mid-1);

//     }

// }
// console.log(binaryRecursive([2,4,5,7],3));