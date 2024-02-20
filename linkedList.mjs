class LinkedList {
  constructor(head = null, tail = null) {
    this.head = head;
    this.tail = tail;
  }

  append(node) {
    if (this.head == null) {
      this.head = node;
    } else if (this.tail == null) {
      this.head.next = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  prepend(node) {
    if (this.head == null) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  size() {
    if (this.head === null) {
      return 0;
    } else {
      let listSize = 0;
      let iterate = true;
      let currentNode = this.head;
      while (iterate == true) {
        currentNode != null ? (listSize += 1) : null;
        currentNode.next == null
          ? (iterate = false)
          : (currentNode = currentNode.next);
      }
      return listSize;
    }
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  at(index) {
    let currentNode = this.head;
    let currentIndex = 0;
    let iterate = true;
    while (iterate) {
      if (currentIndex === index) {
        return currentNode;
      } else if (currentNode.next === null) {
        return 'There is no Node with the given index';
      } else {
        currentIndex++;
        currentNode = currentNode.next;
      }
    }
  }

  pop() {
    if (this.size() === 1) {
      this.head = null;
    } else if (this.size() > 1) {
      let currentNode = this.head;
      let previousNode;
      while (currentNode.next) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = null;
      this.tail = previousNode;
    } else {
      return undefined;
    }
  }

  contains(value) {
    if (this.size() < 1) {
      return false;
    }

    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      } else if (currentNode.next !== null) {
        currentNode = currentNode.next;
      } else break;
    }
    return false;
  }

  find(value) {
    let currentNode = this.head;
    let currentIndex = 0;
    let iterate = true;
    while (iterate) {
      if (currentNode.value === value) {
        return currentIndex;
      } else if (currentNode.next === null) {
        return 'The value is not contained at any index';
      } else {
        currentIndex++;
        currentNode = currentNode.next;
      }
    }
  }

  toString(node = this.head) {
    if (node != null && node.next != null) {
      console.log(`${node.value} -> ${JSON.stringify(node.next.value)}`);
      this.toString(node.next);
    } else if (node != null && node.next == null) {
      console.log(`${node.value} -> Null`);
    } else {
      console.log('No objects in the list');
    }
  }
}

export { LinkedList };
