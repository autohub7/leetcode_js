/*
  https://www.cdn.geeksforgeeks.org/find-the-longest-substring-with-k-unique-characters-in-a-given-string/
 */

class substrgKunique {
	constructor() {
		this.N = 26
	}
	isValid(charMap, k) {
		var count = 0; 
		for (var i in charMap) {
  			if(charMap[i] > 0) count++; 
		}
		return (k >= count)?true:false; 
	}

	kUnique(s, k) {
		var charMap = {}; 
		var curr_start = 0, curr_end = 0; 
		var max_window_size = 1, max_window_start = 0;
		charMap[s[0]] = charMap[s[0]] || []; 
		charMap[s[0]]++; 

		for(var i=1;i<s.length;i++) {
			var char = s[i]; 
			charMap[char] = charMap[char] || []; 
			charMap[char]++; 
			curr_end++;

			while(!this.isValid(charMap, k)) {
				charMap[s[curr_start]]--;
            	curr_start++;
			}

			if(curr_end-curr_start+1 > max_window_size) {
				max_window_size = curr_end-curr_start+1;
            	max_window_start = curr_start;
			}
		}

		return max_window_size
	}
}

// var s = "aabacbebebe";
// var k = 3;
// var subk = new substrgKunique();
// console.log(subk.kUnique(s, k))