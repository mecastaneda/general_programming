
function factIterative(n) {
  var fact = 1;
  while(n>0)
    fact *= n--;
  return fact;
}

function factRecursive(n) {
  if(n==0) return 1;
  return n*factRecursive(n-1);
}


console.log(factRecursive(5));
console.log(factIterative(5));
