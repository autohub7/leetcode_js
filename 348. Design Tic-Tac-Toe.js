var TicTacToe = function(n) {
    this.rows = new Array(n).fill(0); 
    this.cols = new Array(n).fill(0); 
    this.size = n;
    this.diagonal = 0;
    this.antiDiagonal = 0;
};

TicTacToe.prototype.move = function(row, col, player) {
    var toAdd = (player == 1) ? 1 : -1;
    //console.log(player)
    this.rows[row] += toAdd;
    this.cols[col] += toAdd;
    
    if(row == col) {
        this.diagonal += toAdd;
    }
    
    if(col == this.cols.length - row - 1) {
        this.antiDiagonal += toAdd;
    }
    
    if(Math.abs(this.cols[col]) == this.size ||
       Math.abs(this.rows[row]) == this.size ||
       Math.abs(this.diagonal) == this.size ||
       Math.abs(this.antiDiagonal) == this.size) {
       return player;
    }
    
    return 0;
};


/* ES6 Style
class TicTacToe {
	constructor(n) {
		this.rows = new Array(n); 
		this.cols = new Array(n); 
		this.diagonal = 0; 
		this.antiDiagonal = 0; 
	}

	move(row, col, player) {
	    var toAdd = player == 1 ? 1 : -1;

	    this.rows[row] += toAdd;
	    this.cols[col] += toAdd;
	    if (row == col)
	    {
	        this.diagonal += toAdd;
	    }
	    
	    if (col == (this.cols.length - row - 1))
	    {
	        this.antiDiagonal += toAdd;
	    }
	    
	    var size = this.rows.length;
	    if (Math.abs(this.rows[row]) == size ||
	        Math.abs(this.cols[col]) == size ||
	        Math.abs(this.diagonal) == size  ||
	        Math.abs(this.antiDiagonal) == size)
	    {
	        return player;
	    }
	    
	    return 0;
	}
}
*/

/* Testbench 
var game = new TicTacToe(3); 
var seq = [[0,0,1],[0,2,2],[2,2,1],[1,1,2],[2,0,1],[1,0,2],[2,1,1]]

for(var i=0;i<seq.length;i++) {
	// console.log(seq[i][0], seq[i][1], seq[i][2] )
	console.log(game.move(seq[i][0], seq[i][1], seq[i][2]) )
}
*/