class Node{
    constructor()
    {
        this.children={};
        this.isEndOfWord=false;
    }
}
class Trie{
    constructor(){
        this.root=new Node();
    }
    insert(word)
    {
        let node=this.root
        for(const char of word)
        {
            if(!node.children[char])
            {
                node.children[char]=new Node();
            }
            node=node.children[char];
        }
         return node.isEndOfWord=true;
    }
    search(word)
    {
        let node=this.root;
        for(const char of word)
        {
            if(!node.children[char])
            {
                return false;
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
                return false;
            }
            node=node.children[char];
        }
        return true;
    }
}
const trie=new Trie();
trie.insert("apple");
trie.insert("ant");
console.log(trie.search("ant"));
console.log(trie.startsWith("a"));
