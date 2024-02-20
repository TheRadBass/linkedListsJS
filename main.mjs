import { Node } from './node.mjs';
import { LinkedList } from './linkedList.mjs';

const myFirstNode = new Node('First node!');
const mySecondNode = new Node('Second node!');
const myThirdNode = new Node('Third node!');
const myFourthNode = new Node('Fourth node!');
const myFifthNode = new Node('Fifth node!');
const mySixthNode = new Node('Sixth node!');
const mySeventhNode = new Node('Seventh node!');
const myEightNode = new Node('Eighth node!');
const firstLinkedList = new LinkedList();

// Testing functions.

firstLinkedList.append(myThirdNode);
firstLinkedList.append(myFourthNode);
firstLinkedList.append(myFifthNode);
firstLinkedList.append(mySixthNode);
firstLinkedList.append(mySeventhNode);
firstLinkedList.append(myEightNode);
firstLinkedList.prepend(myFirstNode);
firstLinkedList.prepend(mySecondNode);
console.log(firstLinkedList.size());
console.log(firstLinkedList.getHead());
console.log(firstLinkedList.getTail());
console.log(firstLinkedList.at(7));
firstLinkedList.pop();
firstLinkedList.contains('Third node!');
firstLinkedList.find('Sixth node!');
firstLinkedList.toString();
