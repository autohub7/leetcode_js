function Node(val) {
	this.val = val; 
	this.next = null; 
}

var removeElements = function(head, val) {
	var dummy = new Node(null);    //Create dummy node to handle if the first node is a target 
	var prev = dummy; 			   	
	prev.next = head; 

	while(head !== null) {
		if(head.val == val) {
			prev.next = head.next;   // Connect the next of curr 
		} else {
			prev = prev.next;    
		}
			head = head.next; 
	}

	return dummy.next
}