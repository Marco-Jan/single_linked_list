class ListNode {
    value: number;
    next: ListNode | null = null;
    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
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
        if (!this.head) {
            return undefined;
        }

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
    shift() {
        if (!this.head) {
            return undefined;
        }

    }
}

const myList = new SinglyLinkedList();

myList.append(6)
// myList.append(36)
// myList.append(46)
// myList.append(56)
myList.pop()

console.log(myList.pop());

//console.log(myList.tail);


// const head = new ListNode(5);
// head.next = new ListNode(10);
// head.next.next = new ListNode(20);

// console.log(head);
