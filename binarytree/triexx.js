class node {
    constructor() {
        this.children = {};
        this.isEndofWord = false;
    }
}
class Trie {
    constructor() {
        this.root = new Node();
    }
    insert(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new Node();
            }
            node = node.children[char];
        }
        return node.isEndofWord = true;
    }
    search(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                return false
            }
            node = node.children[char];
        }
        return node.isEndofWord;
    }
    startsWith(prefix) {
        let node = this.root;
        for (const char of prefix) {
            if (!node.children[char]) {
                return false
            }
            node = node.children[char];
        }
        return true;
    }
    remove(word) {
        return this.removeNode(this.root, word, 0)
    }
    removeNode(node,word,index)
    {
        if(!node)
        {
            return null;
        }
        if(index===word.length){
            node.isEndofWord = false;
            return Object.keys(node.children).length?null:node
        }
        const char=word[index]
        node.children[char]=this.removeNode(node.children[char],word,index+1)

        if(!node.isEndofWord && node.children[char].length===0){
            return null;
    }
    return node;
}
}