class numIslands {
	constructor( ) {
		this.grid = grid; 
		this.n = grid.length;
		this.m = grid[0].length;
	}
	
	get sol() {
	    var count = 0;
	    if (this.n == 0) return 0;
	    for (var i = 0; i < this.n; i++){
	        for (var j = 0; j < this.m; j++)
	            if (this.grid[i][j] == '1') {
	                this.DFSMarking(this.grid, i, j);
	                ++count;
	            }
	    }    
	    return count;
	}

 	DFSMarking(grid, i, j) {
	    if (i < 0 || j < 0 || i >= this.n || j >= this.m || grid[i][j] != '1') return;
	    grid[i][j] = '0';
	    this.DFSMarking(grid, i + 1, j);
	    this.DFSMarking(grid, i - 1, j);
	    this.DFSMarking(grid, i, j + 1);
	    this.DFSMarking(grid, i, j - 1);
	}
}

var grid = 
[ [ '1', '1', '1', '1', '0' ],
  [ '1', '1', '0', '1', '0' ],
  [ '1', '1', '0', '0', '0' ],
  [ '0', '0', '1', '0', '0' ] ]

var grid = [[]]
var countlands = new numIslands(grid); 
console.log(countlands.sol); 