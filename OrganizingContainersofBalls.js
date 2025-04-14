function organizingContainers(container) {
  const n = container.length;

  const constainerSum = new Array(n).fill(0);
  const typeSum = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      constainerSum[i] += container[i][j];
      typeSum[j] += container[i][j];
    }
  }

  constainerSum.sort((a, b) => a - b);
  typeSum.sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
   if(constainerSum[i] !== typeSum[i]){
    return "Impossible"
   }
  }

  return "Possible";
}

let container = [
  [0, 2],
  [1, 1],
];


console.log(organizingContainers(container));
