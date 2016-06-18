/**
 * Counts word frequency in a set of words.
*/

'use strict';

var fs = require('fs');

var words = fs.readFileSync('./words.txt', 'utf8');

var words_arr = words.match(/\w+\b/g);

var counter = {};
for(let i=words_arr.length-1; i>=0; i--) {
  counter[words_arr[i]] = counter[words_arr[i]]? counter[words_arr[i]]+1 : 1;
}

console.log('#Repeats\tWord');
for (let c in counter) {
  if (counter.hasOwnProperty(c)) {
    console.log('%d\t\t%s', counter[c]-1, c);
  }
}
