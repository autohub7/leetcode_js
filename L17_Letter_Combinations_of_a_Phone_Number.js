var numToLetters = {
    '0': ' ',
    '1': '',
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
};

var letterCombinations = function(digits) {
    class letterCombinations {
        constructor() {
            this.res = []; 
        }

        dfs(digits, idx, curr) {
            if(idx == digits.length) {
                console.log(curr)
                this.res.push(curr)
                return
            }

            var letters = numToLetters[digits[idx]];
            for(var i=0;i<letters.length;i++) {
                this.dfs(digits, idx+1, curr+letters[i]); 
            }
        }

        sol(digits) {
            if(digits.length==0) return this.res; 
            this.dfs(digits, 0, '')
            return this.res; 
        }
    }
    
    var letterComb = new letterCombinations; 
    return letterComb.sol(digits);
};

