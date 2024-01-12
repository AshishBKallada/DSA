function reverseOrder(s){
    const splitString=s.split(' ');
    let stack=[];
    for(let i of splitString){
        stack.push(i);
    }
    let string='';
    while(stack.length>0)
    {
        string+=' '+stack.pop();
    }
    return string.trim();
}
console.log(reverseOrder("hello world, fine thanku"));