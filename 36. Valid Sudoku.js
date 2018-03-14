var isValidSudoku = function(board) {
    var col = Array(9).fill(false).map(()=>Array(9).fill(false));
    var row = Array(9).fill(false).map(()=>Array(9).fill(false));
    var box = Array(9).fill(false).map(()=>Array(9).fill(false));

    for(var i=0; i<9; i++){
        for(var j=0; j<9; j++){
            if (board[i][j]!='.'){
                var num = board[i][j]-'0'-1;
                var k = parseInt(i/3)*3+parseInt(j/3);
                if (row[i][num] || col[j][num] || box[k][num]){
                    return false;
                }
                row[i][num]=col[j][num]=box[k][num] = true;
            }
        }
    }
    return true;
};

var input =
[[".","8","7","6","5","4","3","2","1"],["2",".",".",".",".",".",".",".","."],["3",".",".",".",".",".",".",".","."],["4",".",".",".",".",".",".",".","."],["5",".",".",".",".",".",".",".","."],["6",".",".",".",".",".",".",".","."],["7",".",".",".",".",".",".",".","."],["8",".",".",".",".",".",".",".","."],["9",".",".",".",".",".",".",".","."]]; 

console.log(isValidSudoku(input))
