class Node{
    constructor(){
        this.children={}
        this.isEndOfWord=false;
    }
}
class Trie{
    constructor(){
        this.root=new Node()
    }
    insert(word)
    {
        let node=this.root;
        for(const char of word)
        {
            if(!node.children[char])
            {
                node.children[char]=new Node();
            }
            node=node.children[char];
        }
        node.isEndOfWord=true;
    }
    search(word)
    {
        let node=this.root;
        for(const char of word)
        {
            if(!node.children[char])
            {
               return false
            }
            node=node.children[char];
        }
        return node.isEndOfWord;
    }
    startsWith(prefix)
    {
        let node=this.root;
        for(const char of prefix)
        {
            if(!node.children[char])
            {
               return false
            }
            node=node.children[char];
        }
        return true;
    }
}
const trie = new Trie();

trie.insert("apple");
trie.insert("app");
trie.insert("banana");
trie.insert("bat");

console.log(trie.search("apple")); 
console.log(trie.search("app"));   
console.log(trie.search("banana")); 
console.log(trie.search("bat"));    
console.log(trie.search("orange"));  

console.log(trie.startsWith("app"));  
console.log(trie.startsWith("ban"));  
console.log(trie.startsWith("ba"));   
console.log(trie.startsWith("orange"));
