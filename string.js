const str="Hello World";
console.log([...str]);
console.log(str.split(' '));

function truncate(str,maxLength){
    if(str.length>maxLength)
    {
        return str.slice(0,maxLength)+"...";
    }
    else{
        return str
    }
}
console.log(truncate("HEY WASSUP HOMIES",10));


function isPalindrome(x){
 return x<0 ? false : x=== +x.toString().split("").reverse().join("");
}
console.log(isPalindrome(121));
console.log(isPalindrome(-121));

function hammingDistance(x, y) {
    x = x.toString(2);
    y = y.toString(2);

    if(x.length<y.length){
       while(x.length!==y.length) x="0"+x;
    }else{
        while(x.length!==y.length) y="0"+y;
    }
    let distance=0;
    for(let i=0; i<x.length; i++){
        if(x[i]!==y[i])
        {
            distance++;
        }
    }
    return distance;
}
console.log(hammingDistance(2, 9));

function isAnagram(s,t)
{
    return (s.length!==t.length)?false: (s.split("").sort().join("")===t.split("").sort().join(""))?true:false;
    
  
}
console.log(isAnagram("anagram","nagaram"));


