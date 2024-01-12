class LinearProbing{
    constructor(size){
        this.size=size;
        this.keys=new Array(size)
        this.values=new Array(size)
    }
    hash(key){
        let total=0;
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i);
          
        }
        return total % this.size;
    }
    set(key,value)
    {
        var index=this.hash(key);
        let i;
        while(this.keys[index]!==undefined)
        {
            index=(index+i **2) % this.size;
            i++;
        }
        this.keys[index]=key;
        this.values[index]=value;
    }
    get(key)
    {
        const index=this.hash(key);
        let i;
        while(this.keys[index]!==key)
        {
            index=(index+i **2) % this.size;
            i++;
            if(this.keys[index]===undefined){
            return undefined;
            }
        }
        return this.values[index];
    }
    remove(key)
    {
        const index=this.hash(key);
        while(this.keys[index]!==key)
        {
            index=index+1 % this.size;
            if(this.keys[index]===undefined){
            return undefined; 
            }
        }
        this.keys[index]=undefined;
        this.values[index]=undefined;
    }
    display(){
        for(let i=0;i<this.size;i++)
        {
            if(this.keys[i]!==undefined){
                console.log(`Key: ${this.keys[i]}, ${this.values[i]}`);
            } 
        } 
    }
}
const table=new LinearProbing(5)
table.set("au","Australia")
table.set("fr","France")
table.display();
table.remove("au");
table.display();
console.log(table.get("fr"));
