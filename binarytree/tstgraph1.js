class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set();
        }
    }
    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1])
            this.adjacencyList[vertex1] = new Set();

        if (!this.adjacencyList[vertex2])
            this.adjacencyList[vertex2] = new Set();

        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)

    }
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }
    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            return null;
        }
        const adjacents = this.adjacencyList[vertex];
        for (let adjacentVertex of adjacents) {
            this.removeEdge(adjacentVertex, vertex);
        }
        this.adjacencyList.delete(vertex)
    }

    bfs(startVertex) {
        const visited = new Set();
        const queue = [startVertex];
        while (queue.length !== 0) {
            const currVertex = queue.shift();
            if (!visited.has(currVertex)) {
                visited.add(currVertex);
                console.log(currVertex);
                const adjacents = this.adjacencyList[currVertex];
                for (const adjacentVertex of adjacents) {
                    if (!visited.has(adjacentVertex)) {
                        queue.push(adjacentVertex);
                    }
                }

            }
        }
    }

    dfs(startVertex)
    {
        const visited=new Set();
        const dfshelper=(vertex)=>{
            if(!visited.has(vertex)) {
                visited.add(vertex);
                console.log(vertex);
                const adjacents=this.adjacencyList[vertex]
                for(const adjacentVertex of adjacents) {
                    dfshelper(adjacentVertex);
                }
            }
        }
        dfshelper(startVertex);
    }

}