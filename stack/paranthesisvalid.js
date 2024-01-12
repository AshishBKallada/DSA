function isValid(s)
{
    let stack=[];
    for(let char of s)
    {
        if(char==='(' || char==='{' || char==='[')
        {
                stack.push(char);
        }
        else if(char ===')' || char ==='}' || char ===']')
        {
            const prev=stack.pop();
            if((char ===')' && prev!=='(') || (char ==='}' && prev!=='{') || (char ===']' && prev!=='['))
            {
                return false;
            }
            else{
                return true;
            }
           
        }
    }
}
console.log(isValid('{[}'));