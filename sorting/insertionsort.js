// function insertionSort(arr){
//    for(let i=1;i<arr.length;i++){
//       let temp=arr[i];
//       let j=i-1;
//       while(j>=0 && arr[j]>temp)
//       {
//         arr[j+1]=arr[j];
//         j--;
//       }
//      arr[j+1]=temp;
//    }
//    return arr;
// }
// console.log(insertionSort([3,-4,5,0,-1]));

// class CircularQueue{
//     constructor(size){
//         this.items=new Array(size);
//         this.front=-1;
//         this.rear=-1;
//     }
//     enueue(el){
//         if(this.isEMpty()){
//           this.rear=0
//         }

//     if(this.isFull()){

//     }
//     isFull()
//     {
//         return (this.rear+1) % this.size===this.front;
//     }
//     isEmpty()
//     {
//         return this.front===-1 && this.rear===-1;
//     }


//     }
// }

function bubbleSort(arr)
{
    swapped
    do{
   for(let i=0; i<arr.length; i++){
     swapped=false
    if(arr[i]>arr[i+1])
    {
        let temp=arr[i];
        arr[i]=arr[i+1];
        arr[i+1]=temp;
        swapped=true;
    }
   }
}
   while(swapped)

   return arr;

}
console.log(bubbleSort([]));
