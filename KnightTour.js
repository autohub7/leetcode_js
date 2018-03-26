// https://www.geeksforgeeks.org/backtracking-set-1-the-knights-tour-problem/

class kNightTour {
	constructor() {
		/* xMove[] and yMove[] define next move of Knight.
          xMove[] is for next value of x coordinate
          yMove[] is for next value of y coordinate */
		this.xMove = [2, 1, -1, -2, -2, -1, 1, 2];
    	this.yMove = [1, 2, 2, 1, -1, -2, -2, -1];
    	this.N = 8; 
	}

    isSafe(x, y, sol) {
        return (x >= 0 && x < this.N && y >= 0 &&
                y < this.N && sol[x][y] == -1);
    }
 
	solveKT() {
		var sol = new Array(8).fill(-1).map(()=> new Array(8).fill(-1))
		
		sol[0][0] = 0; 

		/* Start from 0,0 and explore all tours using
           solveKTUtil() */
		if(!this.solveKTUtil(0,0,1,sol,this.xMove,this.yMove)) {
			console.log("Solution does not exist"); 
			return false 
		} else console.log(sol); 

		return true; 
	}
   /* A recursive utility function to solve Knight
       Tour problem */
	solveKTUtil(x, y, movei, sol, xMove, yMove) {
		var k, next_x, next_y; 
		if(movei == this.N*this.N) return true; 

   		/* Try all next moves from the current coordinate
            x, y */
		for(var k=0; k<this.N; k++) {
			next_x = x + xMove[k]; 
			next_y = y + yMove[k]; 
			if (this.isSafe(next_x, next_y, sol)) {
				sol[next_x][next_y] = movei; 
				if(this.solveKTUtil(next_x, next_y, movei+1, sol, xMove, yMove))
					return true; 
				else sol[next_x][next_y] = -1; 
			}
		}

		return false; 
	}	
}

var kn = new kNightTour(); 
kn.solveKT(); 