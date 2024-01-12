// class Node {
//     constructor(value) {
//         this.data = value;
//         this.next = null;
//     }
// }
// class CircularLinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.size = 0;
//     }
//     isEmpty() {
//         return this.size === 0;
//     }
//     getSize() {
//         return this.size;
//     }

//     append(data) {
//         const newNode = new Node(data);
//         if (this.isEmpty()) {
//             this.head = newNode;
//             this.tail = newNode;
//             this.tail.next = newNode;
//         }
//         else {
//             this.tail.next = newNode;
//             newNode.next = this.head;
//             this.tail = newNode;
//         }
//         this.size++;
//     }
//     prepend(data) {
//         const newNode = new Node(data);
//         if (this.isEmpty()) {
//             this.head = newNode;
//             this.tail = newNode;
//             this.tail.next = newNode;
//         } else {
//             newNode.next=this.head;
//             this.tail.next=newNode;
//             this.head=newNode;
//         }
//         this.size++;
//     }
//     insertAfter(data){
//         const newNode = new Node(data);
//         if (this.isEmpty()) {
//             this.head = newNode;
//             this.tail = newNode;
//             this.tail.next = newNode;
//         }else{

//             let curr=this.head;
//             while(curr && curr.next!==data)
//             {
//                 curr=curr.next;
//             }
//             newNode.next=curr.next;
//             newNode.prev=curr;
//             if(curr.next)
//             {
//                 curr.next.prev=newNode;
//             }
//             else
//             {

//             }
//             curr.next=newNode;

//         }  
//     }

//     remove(data){
//         if (this.isEmpty()) {
//             console.log("List Empty");
//             return
//         }
//         else{
//             let curr=this.head;
//             while(curr && curr.next!==this.head)
//             {

//                 if(curr.data===data)
//                 {
//                     curr.prev.next=curr.next;
//                     curr.next.prev=curr.prev;
//                 }
//                 curr=curr.next;
//             }

//         }
//     }

//     display() {
//         if (this.isEmpty()) {
//             console.log("List Empty");
//             return
//         }
//         let curr = this.head;
//         while (curr) {

//             console.log(curr.data);
//             curr = curr.next;

//             if (curr === this.head) {
//                 break;
//             }
//         }
//     }
// }

// const list = new CircularLinkedList();
// list.append(10);
// list.append(20);

// list.prepend(50);
// list.display();


function sumArray(arr,index=0)
{
    if(arr.length===index)
    {
        console.log("ARRAY IS EMPTY");
        return 0; 
    }else{
   
  return arr[index] + sumArray(arr,index+1);
    }
}
console.log(sumArray([9,8,7,6,5,4]));



// function reverseString(str){
//      if(str.length===0)
//      {
//         return ''
//      }
//      else{
//         return reverseString(str.substr(1)) + str.charAt(0);
//      }
// }
// console.log(reverseString("hello"));

// function factorial(n) {
//     if (n === 0 || n===1) {
//         return 1;
//     }
//     return n * factorial(n - 1);
// }

// console.log(factorial(6));