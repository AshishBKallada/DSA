function stringReverse(str)
{
    if(str==="")
    {
        return '';
    }
    else{
        return stringReverse(str.substr(1))+str.charAt(0);
    }
}

console.log(stringReverse("hello"));