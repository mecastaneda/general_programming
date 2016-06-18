'use strict';

var LinkedList = require('./LinkedList')

var ll = new LinkedList();
ll.addArray([6, 5, 3, 1, 8, 7, 2, 4]);

mergeSort(ll);
console.log(ll.toArray());

function mergeSort(list) {
  list.setRoot(split(list.getRoot()));

  function split(root1) {
    if(!root1 || !root1.next) return root1;
    var middle = list.getMiddleRelative(root1);
    var root2 = middle.next;
    middle.next = null;
    return merge(split(root1), split(root2));
  }

  function merge(root1, root2) {
    var result;
    if(!root1) return root2;
    if(!root2) return root1;
    if(root1.value <= root2.value) {
      result = root1;
      result.next = merge(root1.next, root2);
    } else {
      result = root2;
      result.next = merge(root1, root2.next);
    }
    return result;
  }
}
