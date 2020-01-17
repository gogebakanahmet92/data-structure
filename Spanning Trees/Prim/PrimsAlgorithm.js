// Number of vertices in the graph
const V = 5;

const MAX = 999999;

// A utility function to find the vertex with minumum key value, from
// the set of vertices not yet included in MST
const minKey = (key, mstSet) => {
  let min = MAX;
  let min_index;

  for (let v = 0; v < V; v++) {
    if (mstSet[v] == false && key[v] < min) {
      min = key[v];
      min_index = v;
    }
  }
  return min_index;
};

// A utitlity function to print the constructed MST stored in parent[]
const printMST = (parent, n, graph) => {
  console.log("  Edge Weight ");
  for (let i = 1; i < V; i++) {
    console.log(parent[i] + "  " + i + "     " + graph[i][parent[i]]);
  }
};

// Function to construct and print MST for a graph represented using adjacency
// matrix representation
const primMST = graph => {
  let parent = new Array(V).fill(MAX);
  let key = new Array(V).fill(MAX);
  let mstSet = new Array(V).fill(false);

  key[0] = 0;
  parent[0] = -1;

  for (let i = 0; i < V - 1; i++) {
    let u = minKey(key, mstSet);
    mstSet[u] = true;
    for (let v = 0; v < V; v++) {
      if (graph[u][v] && mstSet[v] == false && graph[u][v] < key[v]) {
        parent[v] = u;
        key[v] = graph[u][v];
      }
    }
  }
  printMST(parent, V, graph);
};

const graph = [
  [0, 2, 0, 6, 0],
  [2, 0, 3, 8, 5],
  [0, 3, 0, 0, 7],
  [6, 8, 0, 0, 9],
  [0, 5, 7, 9, 0]
];
// Print the solution
primMST(graph);
