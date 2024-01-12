function fibonacci(n){
  let arr=[0,1];
  for(let i=2;i<=n;i++)
  {
    arr.push(arr[i-2]+arr[i-1]);
  }
  return arr;
}
console.log(fibonacci(4));


function fibonacciRec(n)
{
    if(n<=1)
        {
            return n;
        }
        return fibonacciRec(n-1)+fibonacciRec(n-2);
}
console.log(fibonacciRec());