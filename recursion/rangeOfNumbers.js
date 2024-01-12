function rangeOfNumbers(start,end)
{
    if(start>end)
    {
        return [];
    }
    else{
    const numbers= rangeOfNumbers(start,end-1);
    numbers.push(end);
    return numbers;
    }
}
console.log(rangeOfNumbers(3,7));