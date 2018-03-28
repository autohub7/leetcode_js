/*
    Re-order a given unordered linked-list to odd-even linked-list
    ex) 
    Input:  1->2->3->4->5
    Output: 1->3->5->2->4
*/

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var evenOdd = function(node) {
    if(!node) return 
    var odd = null; 
    var even = null; 
    var odd_head = null; 
    var even_head = null; 
    while(node) {
        if(parseInt(node.val % 2) == 0) {
            if(!even) {    // If there's no head
                even_head = node;
                even = even_head; 
            } else {
                even.next = node; 
                even = even.next; 
            }
        } else {
            if(!odd) {
                odd_head = node;
                odd = odd_head; 
            } else {
                odd.next = node; 
                odd = odd.next; 
            }
        }
        node = node.next; 
    }
    odd.next = even_head;  // Link odd next to even head
    even.next = null;      

    return odd_head
}

/*
var LL = new ListNode(1); 
LL.next = new ListNode(2); 
LL.next.next = new ListNode(3); 
LL.next.next.next = new ListNode(4); 
LL.next.next.next.next = new ListNode(5); 
LL.next.next.next.next.next = new ListNode(6); 

var newLL = evenOdd(LL); 
console.log(JSON.stringify(newLL, null, 2))
*/
