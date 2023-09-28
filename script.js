let renderElem = document.getElementById("root");

function Node(value) {
  this.value = value;
  this.nextPointer = null;
}

function LinkedList() {
  this.head = null;

  this.append = function (value) {
    let new_node = new Node(value);

    if (!this.head) {
      this.head = new_node;
      return;
    }
    let current = this.head;
    while (current.nextPointer) {
      current = current.nextPointer;
    }
    current.nextPointer = new_node;
  };

  // Function to prepend a new node to the start of the list

  this.prepend = function (value) {
    const new_node = new Node(value);
    new_node.nextPointer = this.head;

    this.head = new_node;
  };

  // Function to return the total number of nodes in the list

  this.size = function () {
    let count = 0;
    let current = this.head;

    while (current) {
      count++;
      current = current.nextPointer;
    }
    return count;
  };

  // Function to return the first node in the list

  this.heads = function () {
    return this.head;
  };

  // Function to return the last node in the list

  this.tail = function () {
    let current = this.head;
    while (current && current.nextPointer) {
      current = current.nextPointer;
    }
    return current;
  };
  // Function to return the node at the given index

  this.index = function (ind) {
    let count = 0;
    let current = this.head;

    while (current) {
      if (count === ind) {
        return current;
      }

      count++;
      current = current.nextPointer;
    }

    return null;
  };

  // Function to remove the last element from the list

  this.pop=function(){
    if (!this.head) {
        return null;
      }
  
      if (!this.head.nextPointer) {
        const poppedNode = this.head;
        this.head = null;
        return poppedNode;
      }
  
      let current = this.head;
      let previous = null;
  
      while (current.nextPointer) {
        previous = current;
        current = current.nextPointer;
      }
  
      previous.nextPointer = null;
      return current;
  }

   // Function to check if the list contains a specific value
   
   this.contains=function(value){

    let current=this.head;

    while(current){
        if(current.value===value){
            return true;
        }
        current=current.nextPointer;
    }
    return false;
   }

    // Function to find the index of a node containing a specific value

    this.find=function(value){
        let index=0;
        let current=this.head;

        while(current){
            if(current.value===value){
                return index;
            }
            index++;
            current=current.nextPointer;
        }
        return null;
    }

     // Function to represent the linked list as a string

     this.toString = function () {
        let result = '';
        let current = this.head;
    
        while (current) {
          result += `(${current.value}) -> `;
          current = current.nextPointer;
        }
    
        result += 'null';
        return result;
      }
}

const myList = new LinkedList();

myList.append(5);
myList.append(10);
myList.prepend(2);

renderElem.innerText=myList.toString()
renderElem.innerText=myList.size();
renderElem.innerHTML=myList.heads().value;
renderElem.innerHTML=myList.tail().value;
console.log(myList.toString()); 
console.log(myList.size()); 
console.log(myList.heads().value); 
console.log(myList.tail().value); 



myList.pop();
renderElem.innerHTML=myList.toString();
renderElem.innerHTML=myList.contains(5);
renderElem.innerHTML=myList.find(5)
console.log(myList.toString()); 
console.log(myList.contains(5)); 
console.log(myList.find(5)); 

