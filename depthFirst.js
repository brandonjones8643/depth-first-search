const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

depthFirstIterative = (graph, startingNode) => {
  const stack = [startingNode];

  while (stack.length > 0) {
    current = stack.pop();
    for (let i of graph[current]) {
      stack.push(i);
    }
  }
};

depthFirstRecursive = (graph, startingNode) => {
  for (let i of graph[startingNode]) {
    depthFirstRecursive(graph, i);
  }
};

depthFirstIterative(graph, "a");
depthFirstRecursive(graph, "a");
