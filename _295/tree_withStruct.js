/**
 * Finds the common ancestor of two nodes in a Tree
 * with data structure and with no known depth.
 */

'use strict';

class Tree {
  constructor() {
    class Node {
      constructor(value, parent) {
        this.value = value;
        this.parent = parent;
        this.children = [];
      }

      addChild(value) {
        var child = new Node(value, this);
        this.children.push(child);
        return child;
      }

    } // end Node class definition

    this.root = new Node('a', null);
  } // end Tree constructor

  findAncestor(node1, node2) {
    var path1 = [], path2=[], tempNode = node1;
    while(tempNode) {
      path1.push(tempNode)
      tempNode = tempNode.parent;
    }
    tempNode = node2;
    while(tempNode) {
      path2.push(tempNode)
      tempNode = tempNode.parent;
    }
    for(var i=path1.length-1, j=path2.length-1; i>=0; i--) {
      if(path1[i] != path2[j--])
        break;
    }
    return path1[i+1];
  }
} // end Tree class definition

var elm = new Tree();
var b1 = elm.root.addChild('b1');
var b2 = elm.root.addChild('b2');
var b3 = elm.root.addChild('b3');
var c1b1 = b1.addChild('c1b1');
var c2b1 = b1.addChild('c2b1');
var c3b2 = b2.addChild('c3b2');
var c4b3 = b3.addChild('c4b3');
var c5b3 = b3.addChild('c5b3');
var c6b3 = b3.addChild('c6b3');
var d1 = c4b3.addChild('d1');
var d2 = c4b3.addChild('d2');
var d3 = c4b3.addChild('d3');
var e1d1 = d1.addChild('e1d1');
var e2d1 = d1.addChild('e2d1');
var e3d2 = d2.addChild('e3d2');

/*
a
|-b1
|  |-c1b1
|  |_c2b1
|-b2
|  |_c3b2
|_b3
   |-c4b3
   |  |-d1
   |  |  |-e1d1
   |  |  |_e2d1
   |  |-d2
   |  |  |_e3d2
   |  |_d3
   |-c5b3
   |_c6b3
 */

console.log(elm.findAncestor(c6b3, e2d1).value);
