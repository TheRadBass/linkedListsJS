# Linked Lists JS implementation

##### This implementation was made to practice with the data structure type and get a deeper understanding of how to work with linked lists.

The modules consist of 3 files:
- linkedList.mjs (Representing the linked-list structure)
- node.mjs (Which includes a class for the nodes in the list)
- main.mjs (The main class which calls the methods like appending and prepending nodes, deleting, searching values, etc.).


## Functionality

```js
    1. append(node) // Inserts node at the end of the list
    2. prepend(node) // Inserts node at the beginning of the list
    3. size() // Returns the size of the list (Number of nodes)
    4. getHead() // Returns the first node of the list
    5. getTail() //Returns the last node of the list
    6. atIndex(index) // Returns the value at the given index
    7. pop() // Deletes the reference to the last node in the list, second to last becomes the tail.
    8. contains(value) // Returns True or False depending if the value exists in any of the list's nodes.
    9. find(value) // Returns the index number of the given value if it exists in the list.
    10. toString() // Returns a list of the nodes values with their pointers.
```
