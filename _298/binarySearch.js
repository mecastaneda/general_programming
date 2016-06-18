'use strict';

var arr1 = [1, 3, 4, 6, 7, 8, 10, 14, 15];
console.log(binarySearch(4, arr1));

function binarySearch(elm, arr) {
  return search(0, arr.length-1);
  
  function search(startIdx, endIdx) {
    var middle = Math.floor((endIdx-startIdx)/2)+startIdx;
    if(arr[middle] == elm) return middle;
    if(endIdx == startIdx) return -1;
    if(elm > arr[middle]) return search(middle+1, endIdx);
    else return search(startIdx, middle-1);
  }
}
