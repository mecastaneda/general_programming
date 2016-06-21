'use strict';

var LinkedList = require('./LinkedList');

var ll = new LinkedList();
var ll_noLoop = new LinkedList();

ll.addArray([1,2,3,4,5,6,7,8]);
ll_noLoop.addArray([1,2,3,4,5,6,7,8]);
var middle = ll.getMiddle();
var last = ll.add(9);
last.next = middle;
console.log(isLooped(ll));
console.log(isLooped(ll_noLoop));


function isLooped(list) {
  var slow = list.getRoot(),
      fast = slow;
  while(fast.next) {
    fast = fast.next;
    if(fast == slow) return true;
    if(fast.next) {
      fast = fast.next;
      slow = slow.next;
    }
  }
  return false;
}
