// function swap(arr, i, j) {
//     const temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
// }

// function partition(arr, lb, ub) {
//     const pivot = arr[lb];
//     let start = lb + 1;
//     let end = ub;

//     while (start <= end) {
//         while (arr[start] <= pivot && start <= end) {
//             start++;
//         }
//         while (arr[end] > pivot && start <= end) {
//             end--;
//         }
//         if (start < end) {
//             swap(arr, start, end);
//         }
//     }

//     swap(arr, lb, end);
//     return end;
// }

// function quickSort(arr, lb, ub) {
//     if (lb < ub) {
//         const loc = partition(arr, lb, ub);
//         quickSort(arr, lb, loc - 1);
//         quickSort(arr, loc + 1, ub);
//     }
// }

// const arr = [5, -6, 2, -2, 4];
// quickSort(arr, 0, arr.length - 1);
// console.log(arr);


// function swap(arr, high, low) {
//     let i = low - 1;
//     let pivot = arr[high];
//     for (let j = low; j < high; j++) {
//         if (arr[j] < pivot) {
//             i++;
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
//     let temp = arr[high];
//     arr[high] = arr[i + 1];
//     arr[i + 1] = temp;
//     return i + 1;
// }

// function quickSort(arr, low, high) {
//     if (low < high) {
//         let value = swap(arr, high, low);
//         quickSort(arr, low, value - 1);
//         quickSort(arr, value + 1, high);
//     }
// }
// let arr=[5,-6,2,-2];
// quickSort(arr, 0, arr.length - 1);
// console.log(arr);

// function partition(arr,l,h)
// {
//     let pivot=arr[l];
//     let i=l,j=h;
//     while(i<j){
//     do{
//         i++
//     }while(arr[i]< pivot)
//     do{
//         j--
//     }while(arr[j]> pivot)
//     if(i<j)
//     {
//         let temp=arr[i];
//         arr[i]=arr[j];
//         arr[j]=temp;
//     }
// }
// let temp=arr[l];
// arr[l]=arr[j];
// arr[j]=temp;
// return j;
// }
// function QuickSort(arr,l,h)
// {
//     if(l<h){
//     let loc=partition(arr,l,h);
//     QuickSort(arr,l,loc)
//     QuickSort(arr,loc+1,h);
//     }
//     return arr
// }
// let arr=[-4,2,-6,7,0,10];
// QuickSort(arr,0,arr.length-1);
// console.log(arr);

function partition(arr, l, h) {
    const pivot = arr[l];
    let i = l, j = h;
    while (i < j) {
        do {
            i++
        } while (arr[i] < pivot)
        do {
            j--
        } while (arr[j] > pivot)
        if (i < j) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    let temp = arr[j];
    arr[j] = arr[l];
    arr[l] = temp;
    return j;
}
function quickSort(arr,l,h){
    if(l<h)
    {
    const loc=partition(arr,l,h);
    quickSort(arr,l,loc);
    quickSort(arr,loc+1,h);
    }
    return arr;
}
const arr=[4,-2,6,5,0]
console.log(quickSort(arr,0,arr.length-1));
