'use strict';

var arr1 = [1,2,2,4,5,8,3,7,1,5,9,0,4,2,6];

removeDuplicates(arr1);
console.log(arr1);

function removeDuplicates(arr) {
  var map = {};
  for(var i=0; i<arr.length;) {
    if(map[arr[i]]) {
      arr.splice(i,1);
      continue;
    }
    map[arr[i]] = true;
    i++;
  }
}
