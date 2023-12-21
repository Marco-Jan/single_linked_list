class ListNode {
    value: number;
    next: ListNode | null = null;
    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

module.exports = class SinglyLinkedList {
    head: ListNode | null = null;
    tail: ListNode | null = null;
    length: number = 0;
    //add Item at the End of the list
    append(value: number) {

        const newNode = new ListNode(value);

        if (this.head === null) {

            this.head = newNode;
            this.tail = newNode;

        }
        else {

            this.tail!.next = newNode;
            this.tail = newNode;

        } this.length++;
        return this;

    }

    //remove last Item and set new Tail
    pop() {
        if (!this.head) return undefined;


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
        } else {
            this.head = null;
        }
        this.length--;
        return currentItem;
    }

    //verschiebt den 

    shift() {
        if (!this.head) return undefined;

        let currentHead = this.head;
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }

        return currentHead;
    }


    unshift(value: number) {
        const newNode = new ListNode(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {

            newNode.next = this.head;
            console.log(newNode);
            this.head = newNode;

        }
        this.length++;

        //retrun der liste
        return this;
    }

    get(index: number) {

        if (index < 0 || index >= this.length) return -1;

        let currentNode = this.head;
        let counter = 0;

        while (counter !== index) {
            currentNode = currentNode?.next as ListNode;
            counter++
        }

        return currentNode;
    }

    set(value: number, index: number) {
        let node: ListNode | null | -1 = this.get(index);
        if (node === -1) return false;
        node!.value = value;
        return true;
    }

    insert(value: number, index: number) {
        if (index < 0 || index < this.length) return false
        if (index === 0) return !!this.unshift(value);
        if (index === this.length) return !!this.append(value);

        const newNode = new ListNode(value);
        let previousNode: ListNode | null | -1 = this.get(index - 1);
        if (previousNode === -1) return false;
        let temp = previousNode?.next;

        previousNode!.next = newNode;
        newNode.next = temp || null;

        this.length++;
        return true;

    }


    remove(index: number) {
        if (index < 0 || index >= this.length) return -1;
        if (index === 0) return this.shift()?.value;
        if (index === this.length - 1) return this.pop()?.value;

        const previousNode = this.get(index - 1) as ListNode;
        const removedNode = previousNode.next;
        previousNode.next = removedNode?.next || null;

        this.length--;
        return removedNode?.value;
    }

    reverse() {
        let currentNode: ListNode | null | -1 = this.head;
        if (!currentNode) return null;

        this.head = this.tail;
        this.tail = currentNode;

        let prevNode: ListNode | null = null;
        let nextNode: ListNode | null = null;

        for (let i = 0; i < this.length; i++) {
            nextNode = currentNode.next as ListNode;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = nextNode;
        }

        return this;
    }

}
// const myList = new SinglyLinkedList();

// myList.append(6)
// myList.append(36)
// myList.append(46)
// myList.append(56)
// myList.pop()
// myList.shift()
// myList.get(5)

// console.log(myList.get(5));

//console.log(myList.tail);
// const head = new ListNode(5);
// head.next = new ListNode(10);
// head.next.next = new ListNode(20);

// console.log(head);
