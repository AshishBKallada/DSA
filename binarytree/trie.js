class Node {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}
class Trie {
    constructor() {
        this.root = new Node();
    }
    insert(word) {
        let node = this.root
        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new Node();
            }
            node = node.children[char];
        }
        return node.isEndOfWord = true;
    }
    search(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return node.isEndOfWord;
    }
    startsWith(prefix) {
        let node = this.root;
        for (const char of prefix) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return true;
    }
    remove(word)
    {
        return this._remove(this.root,word,0)
    }
   _remove(node,word,index)
   {
    if(!node)
    {
        return false;
    }
    if(index===word.length)
    {
        node.isEndOfWord = true;
        return Object.keys(node.children).length===0?null:node
    }
    const char=word[index];
    node.childerm[char]=this._remove(node.childerm[char],word,index+1);

    if(!node.isEndOfWord && Object.keys(node.children).length===0)
    {
        return null;
    }
    return node;
   }
}
const trie = new Trie();
trie.insert("apple");
trie.insert("ant");
console.log(trie.search("ant"));
console.log(trie.startsWith("a"));


remove(word)
{
    return this.removeNode(this.root,word,0)
}
removeNode(node,word,index)
{
    if(!node)
    {
        return false;
    }
    if(index===word.length)
    {
        node.isEndOfWord = false;
        return this.Object.keys(node.children).length===0?null:0
    }
    const char=word[index]
    node.children[char]=this.removeNode(node.children[char],word,index+1)
    if(!node.isEndOfWord && node.children[char].length)
    {
        return null;
    }
    return node;
}