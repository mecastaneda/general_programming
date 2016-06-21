'use strict';
var LinkedList = require('./LinkedList');

var str1 = "abc, bc ,bcd,abb,def";
console.log(sortCSV(str1));

function sortCSV(str) {
  var arr = str.toLowerCase().split(/\s*,\s*/),
      list = new LinkedList(),
      result = [];

  for(var i=arr.length-1; i>=0; i--) {
    for(var j=arr[i].length-1, sum=0; j>=0; j--) {
      sum += arr[i].charCodeAt(j)-96;
    }
    addToList({idx: i, weight:sum}); // inserts in proper order
  }
  var node = list.getRoot();
  while(node) {
    result.push(arr[node.value.idx]);
    node = node.next;
  }
  return(result);

  function addToList(weightObj) {
    var node = list.getRoot();
    if(!node)
      return list.add(weightObj);

    if(node.value.weight >= weightObj.weight) {
      list.setRoot(list.createNode(weightObj));
      list.getRoot().next = node;
      return;
    }

    while(node.next) {
      if(node.next.value.weight > weightObj.weight)
        break;
      node = node.next;
    }
    if(!node.next)
      return list.add(weightObj);

    var temp = node.next;
    node.next = list.createNode(weightObj);
    node.next.next = temp;
  }
}
