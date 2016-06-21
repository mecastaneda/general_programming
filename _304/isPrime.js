function isPrime(n) {
  if(n<=1) return false;
  if(n<=3) return true;
  if(!(n%2 && n%3)) return false;
  for(var i=5; i*i<=n; i+=6)
    if(!(n%i && n%(i+2)))
      return false;
  return true;
}

for(var i=0; i<30; i++) {
  console.log('%d is prime? %s', i, isPrime(i));
}
