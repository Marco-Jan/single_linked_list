"use strict";
class ListNode {
    constructor(value) {
        this.next = null;
        this.value = value;
        this.next = null;
    }
}
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    //add Item at the End of the list
    append(value) {
        const newNode = new ListNode(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    //remove last Item and set new Tail
    pop() {
        if (!this.head)
            return undefined;
        let currentItem = this.head;
        let preItem = null;
        if (!this.head.next) {
            this.head = null;
            this.tail = null;
            this.length--;
            return currentItem;
        }
        while (currentItem.next) {
            preItem = currentItem;
            currentItem = currentItem.next;
        }
        if (preItem) {
            preItem.next = null;
        }
        else {
            this.head = null;
        }
        this.length--;
        return currentItem;
    }
    //verschiebt den 
    shift() {
        if (!this.head)
            return undefined;
        let currentHead = this.head;
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }
    unshift(value) {
        const newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            console.log(newNode);
            this.head = newNode;
        }
        this.length++;
        //retrun der liste
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.length)
            return -1;
        let currentNode = this.head;
        let counter = 0;
        while (counter !== index) {
            currentNode = currentNode === null || currentNode === void 0 ? void 0 : currentNode.next;
            counter++;
        }
        return currentNode;
    }
    set(value, index) {
        let node = this.get(index);
        if (node === -1)
            return false;
        node.value = value;
        return true;
    }
    insert(value, index) {
        if (index < 0 || index < this.length)
            return false;
        if (index === 0)
            return !!this.unshift(value);
        if (index === this.length)
            return !!this.append(value);
        const newNode = new ListNode(value);
        let previousNode = this.get(index - 1);
        if (previousNode === -1)
            return false;
        let temp = previousNode === null || previousNode === void 0 ? void 0 : previousNode.next;
        previousNode.next = newNode;
        newNode.next = temp || null;
        this.length++;
        return true;
    }
    remove(index) {
        var _a, _b;
        if (index < 0 || index >= this.length)
            return -1;
        if (index === 0)
            return (_a = this.shift()) === null || _a === void 0 ? void 0 : _a.value;
        if (index === this.length - 1)
            return (_b = this.pop()) === null || _b === void 0 ? void 0 : _b.value;
        const previousNode = this.get(index - 1);
        const removedNode = previousNode.next;
        previousNode.next = (removedNode === null || removedNode === void 0 ? void 0 : removedNode.next) || null;
        this.length--;
        return removedNode === null || removedNode === void 0 ? void 0 : removedNode.value;
    }
    reverse() {
        let currentNode = this.head;
        if (!currentNode)
            return null;
        this.head = this.tail;
        this.tail = currentNode;
        let prevNode = null;
        let nextNode = null;
        for (let i = 0; i < this.length; i++) {
            nextNode = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = nextNode;
        }
        return this;
    }
}
const myList = new SinglyLinkedList();
//myList.append(6)
// myList.append(36)
// myList.append(46)
// myList.append(56)
//myList.pop()
//myList.shift()
//myList.get(5)
console.log(myList.get(5));
//console.log(myList.tail);
// const head = new ListNode(5);
// head.next = new ListNode(10);
// head.next.next = new ListNode(20);
// console.log(head);
//# sourceMappingURL=main.js.map