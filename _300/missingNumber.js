'use strict';

var arr1 = [2, 12, 5, 6, 13, 16, 10, 1, 3, 9, 14, 4, 8, 11, 15, 7]; // no missing
var arr2 = [2, 12, 5, 6, 13, 16, 1, 3, 9, 14, 4, 8, 11, 15, 7]; // 10 missing
var arr3 = [1, 2, 4, 5]; // 3 missing

console.log(findMissing(arr2));

function findMissing(arr) {
  var size = arr.length+1,
      sum = size*(size+1)/2;
  for(var i=arr.length-1; i>=0; i--)
    sum -= arr[i];
  return sum;
}
