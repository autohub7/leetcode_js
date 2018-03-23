function twodarray() {
	var arr = new Array(5).fill(null); 
	for(var i in arr) {
		arr[i] = new Array(5).fill(null); 
	}

	// Create with 2d Array with null
	var twoDArray = Array(5).fill(null).map(()=>Array(5).fill(null));

	// Create empty 2d Array
	var twoDArrEmpty = Array(5).fill().map(()=>Array(5).fill());
}
