class HashTable{
    constructor(size)
    {
        this.keys=new Array(size);
        this.values=new Array(size);
        this.size=size;
    }
    hash(key)
{
    let total=0;
    for(let i=0;i<key.length;i++)
    {
        total+=key.charCodeAt(i);
    }
    return total % this.size;
}
set(key,value)
{
    var index=this.hash(key)
    while(this.keys[index]!==undefined){
        index=(index+1) % this.size;
    }
    this.keys[index]=key;
    this.values[index]=value;
}
get(key)
{
    var index=this.hash(key);
    while(this.keys[index]!==key)
    {
        index=(index+1) % this.size;
        if(this.keys[index]===undefined)
        {
            return null;
        }
    }
    return this.values[index];
}
remove(key)
{
    var index=this.hash(key);
    while(this.keys[index]!==key)
    {
        index=(index+1) % this.size;
        if(this.keys[index]===undefined)
        {
            return null;
        }
    }
    this.keys[index]=undefined;
    this.values[index]=undefined;
}
display(){
    for(let i=0;i<this.keys.length;i++)
    {
        if(this.keys[i])
        {
            console.log(`Keys:${this.keys[i]},${this.values[i]}`);
        }
    }
}
}
const hash=new HashTable(50);
hash.set("in","india")
hash.set("fr","france")
console.log(hash.get("fr"));
hash.remove("in");
hash.display();