// const matrix=[
//     [0,1,0],
//     [1,0,1],
//     [0,1,0]
// ]
// console.log(matrix[1][1]);

// const matrix={
//     'A':['B'],
//     'B':['A','B'],
//     'C':['C']
// }
// console.log(matrix['B']); 

// class Graph {
//     constructor() {
//         this.adjacencyList = {}
//     }
//     addVertex(vertex) {
//         if (!this.adjacencyList[vertex]) {
//             this.adjacencyList[vertex] = new Set();
//         }
//     }
//     addEdge(vertex1, vertex2) {
//         if (!this.adjacencyList[vertex1]) {
//             this.addVertex(vertex1);
//         }
//         if (!this.adjacencyList[vertex2]) {
//             this.addVertex(vertex2);
//         }
//         this.adjacencyList[vertex1].add(vertex2)
//         this.adjacencyList[vertex2].add(vertex1)

//     }
//     hasEdge(vertex1, vertex2) {
//         return (this.adjacencyList[vertex1].has(vertex2) &&
//             this.adjacencyList[vertex2].has(vertex1))
//     }
//     removeEdge(vertex1, vertex2) {
//         this.adjacencyList[vertex1].delete(vertex2)
//         this.adjacencyList[vertex2].delete(vertex1)
//     }
//     removeVertex(vertex) {
//         if (!this.adjacencyList[vertex]) {
//             return
//         }
//         for (const adjacentvertex of this.adjacencyList[vertex]) {
//             this.removeEdge(vertex, adjacentvertex);
//         }
//         delete this.adjacencyList[vertex];

//     }
//     bfs(startvertex) {
//         const visited = new Set();
//         const queue = [startvertex]
//         while (queue.length !== 0) {
//             const currVertex = queue.shift();
//             if (!visited.has(currVertex)) {
//                 console.log(currVertex);
//                 visited.add(currVertex);
//                 const adjacentvertices = this.adjacencyList[currVertex];
//                 for (const adjacent of adjacentvertices) {
//                     if (!visited.has(adjacent)) {
//                         queue.push(adjacent);
//                     }
//                 }
//             }
//         }
//     }
//     dfs(startvertex)
//     {
//         const visited = new Set();
//         const dfshelper=(vertex) =>{
//             if(!visited.has(vertex)){
//                 console.log(vertex);
//                 visited.add(vertex);
//                 const adjacents=this.adjacencyList[vertex];
//                 for(const adjacent of adjacents){
//                     if(!visited.has(adjacent)){
//                         dfshelper(adjacent)
//                     }
//                 }
//             }
//         }
//         dfshelper(startvertex);
//     }
//     display() {
//         for (let vertex in this.adjacencyList) {
//             console.log(vertex + "=>" + [...this.adjacencyList[vertex]]);
//         }
//     }

//     isValid()
//     {
//         const visited=new Set();
//         const startvertex=Object.keys(this.adjacencyList)[0];
//         this.dfs(startvertex, visited);

//         if(Object.keys(this.adjacencyList).length !== visited.size)
//         {
//             console.log("Graph is not a connected graph");
//         }else{
//             console.log("Connected graph");
//         }

//     }


// }
// const graph = new Graph();

// graph.addVertex('A');
// graph.addVertex('B');
// graph.addVertex('C');
// graph.addVertex('D');
// graph.addVertex('E');

// graph.addEdge('A', 'B');
// graph.addEdge('B', 'C');
// graph.addEdge('C', 'D');
// graph.addEdge('D', 'E');
// graph.addEdge('E', 'A');


// graph.display();
// console.log("BFS:");
// graph.bfs('D');
// console.log("DFS:");
// graph.dfs('D');

// //validation

// graph.isValid();



class Graph {
    constructor() {
        this.adjacentList = {};
    }
    addvertex(vertex) {
        if (!this.adjacentList[vertex]) {
            this.adjacentList[vertex] = new Set();
        }
    }
    addEdge(vertex1, vertex2) {
        if (!this.adjacentList[vertex1]) {
            this.addvertex(vertex1)
        }
        if (!this.adjacentList[vertex2]) {
            this.addvertex(vertex2)
        }
        this.adjacentList[vertex1].add(vertex2)
        this.adjacentList[vertex2].add(vertex1)
    }
    hasEdge(vertex1, vertex2) {
        return this.adjacentList[vertex1].has(vertex1) && this.adjacentList[vertex2].has(vertex2)
    }
    removeEdge(vertex1, vertex2) {
        this.adjacentList[vertex1].delete(vertex2)
        this.adjacentList[vertex2].delete(vertex1)
    }
    removeVertex(vertex) {
        if (!this.adjacentList[vertex]) {
            return null;
        }
        for (const adjacent of adjacentList) {
            this.removeEdge(vertex,adjacent);
        }
        this.adjacentList.delete[vertex];
    }
    bfs(startVertex)
    {
        const visited=new Set();
        const queue=[startVertex];
        while(queue.length!==0)
        {
            const currVertex=queue.shift();
            if(!visited.has(currVertex))
            {
                visited.add(currVertex);
                console.log(currVertex);
                const adjacents=this.adjacentList[currVertex];
                for(const adjacent of adjacents)
                {
                    if(!visited.has(adjacent))
                    {
                        queue.push(adjacent);
                    }
                }
            }
        }
    }
    dfs(startVertex)
    {
        const visited=new Set();
        const dfshelper=(vertex)=>{
            if(!visited.has(vertex))
            {
                visited.add(vertex);
                console.log(vertex);
                const adjacents=this.adjacentList[vertex];
                for(const adjacent of adjacents)
                {
                    if(!visited.has(adjacent))
                    {
                        dfshelper(adjacent)
                    }
                }
            }
        }
        dfshelper(startVertex)
    }
    display()
    {
        for(const vertex of this.adjacentList)
        {
            console.log(vertex + "> " + [...this.adjacentList[vertex]]);
        }
    }
}