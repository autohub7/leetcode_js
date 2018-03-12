var reverseLL = function(head) {
	prev = null; 
	curr = head.root; 
	
	while(curr) {
		next = curr.next; 
		curr.next = prev; 
		prev = curr; 
		curr = next; 
	}

	return prev; 
}