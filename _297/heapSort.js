'use strict';

var arr1 = [4, 8, 9, 2 ,1 , 6, 7, 3, 5];
heapSort(arr1);

function heapSort(arr) {
  var size = arr.length,
      temp;

  // create Heap
  for(var i = Math.floor(size/2); i >= 0; i--) {
    heapify(i);
  }

  for(var i = arr.length-1; i >= 1; i--) {
    temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;
    size--;
    heapify(0);
  }
  return arr;


  function heapify(index) {
    var left = index*2,
        right = left+1,
        largest = index;

    if(left < size && arr[left] > arr[largest])
      largest = left;

    if(right < size && arr[right] > arr[largest])
      largest = right;

    if(largest != index) {
      temp = arr[index];
      arr[index] = arr[largest];
      arr[largest] = temp;
      heapify(largest);
    }
  }

}
