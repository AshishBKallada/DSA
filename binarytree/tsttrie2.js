class Node {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}
class trie {
    constructor() {
        this.root = new Node();
    }
    insert(word) {
        let node = new Node();
        for (const char of word) {
            if (!node.childern[char]) {
                node.children[char] = new Node();
            }
            node = node.childern[char];
        }
        node.isEndOfWord = true;
    }
    search(word) {

        let node = new Node();
        for (const char of word) {
            if (!node.childern[char]) {
                return false;
            }
            node = node.childern[char];
        }
       return node.isEndOfWord;
    }
    startsWith(prefix) {

        let node = new Node();
        for (const char of prefix) {
            if (!node.childern[char]) {
                return false;
            }
            node = node.childern[char];
        }
       return true;
    }
}