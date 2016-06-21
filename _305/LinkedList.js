'use strict';

class LinkedList {

	constructor() {

		/* Private Variables */
		var root = null;

		/* Public API */
		this.getRoot = function() {
			return root;
		};

		this.setRoot = function(_root) {
			root = _root;
		};

		this.add = function(value) {
			if(!root) {
				root = new Node(value);
				return;
			}
			var current = root;
			while(current.next) {
				current = current.next;
			}
			current.next = new Node(value);
		};

		this.createNode = function(value) {
			return new Node(value);
		};

		/* Private Nested Class */
		class Node {
			constructor(value, next) {
				this.value = value;
				this.next = next || null;
			}
		} // end Node class definition

	} // end constructor

	/* Utility Public API */
	toArray() {
		var current = this.getRoot();
		var retArray = [current.value];
		while(current.next) {
			current = current.next;
			retArray.push(current.value);
		}
		return retArray;
	}
	addArray(arr) {
		for (var i = 0; i < arr.length; i++) {
			this.add(arr[i]);
		}
	}

  getMiddle() {
    var slow = this.getRoot(),
        fast = slow;
    while(fast.next) {
      fast = fast.next;
      if(fast.next) {
        fast = fast.next;
        slow = slow.next;
      }
    }
    return slow;
  }

  // TODO change to static method
  getMiddleRelative(root) {
    var slow = root,
        fast = root;
    while(fast.next) {
      fast = fast.next;
      if(fast.next) {
        fast = fast.next;
        slow = slow.next;
      }
    }
    return slow;
  }

	/*reverse() {
		var prev = this.getRoot(), next = prev.next;
		while(next)
			[next.next, prev, next] = [prev, next, next.next];
		this.getRoot().next = null;
		this.setRoot(prev);
	}*/

} // end LinkedList class definition

module.exports = LinkedList;
