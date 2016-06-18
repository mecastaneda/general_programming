'use strict';

var arr1 = [3, 7, 8, 5, 2, 1, 9, 5, 4];

console.log('unsorted', arr1);
quickSort(arr1);
console.log('sorted', arr1);

function quickSort(arr) {
  sort(0, arr.length-1);
  function sort(startIdx, endIdx) {
    var pivot = {val: arr[endIdx], pos: endIdx};
    for(var i=startIdx; i<pivot.pos;) {
      if(arr[i] > pivot.val) {
        arr[pivot.pos] = arr[i];
        arr[i] = arr[--pivot.pos];
      } else i++;
    }
    arr[pivot.pos] = pivot.val;

    if(endIdx - pivot.pos > 0)
      sort(pivot.pos+1, endIdx);
    if(pivot.pos - startIdx > 0)
      sort(startIdx, pivot.pos -1);
  }
  return arr;
}
