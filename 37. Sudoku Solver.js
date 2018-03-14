var solveSudoku = function(board) {
  doSolve(board, 0, 0); 

  function doSolve(board, row, col) {
        for (var i = row; i < 9; i++, col = 0) { // note: must reset col here!
            for (var j = col; j < 9; j++) {
                if (board[i][j] != '.') continue;
                for (var num = 1; num <= 9; num++) {
                    if (isValid(board, i, j, num)) {
                        board[i][j] = num;
                        if (doSolve(board, i, j + 1))
                            return true;
                        board[i][j] = '.';
                    }
                }
                return false;
            }
        }
        return true;
  }

  	function isValid(board, row, col, num) {
	    var blkrow = parseInt(row/3) * 3, blkcol = parseInt(col/3) * 3; // Block no. is i/3, first element is i/3*3
	    for (var i = 0; i < 9; i++)
	        if (board[i][col] == num || board[row][i] == num || 
	                board[blkrow + parseInt(i / 3)][blkcol + parseInt(i % 3)] == num)
	            return false;
	    return true;
	}
}; 


