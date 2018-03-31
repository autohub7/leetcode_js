/*
	https://www.geeksforgeeks.org/dynamic-programming-set-8-matrix-chain-multiplication/
	*/

class chainMulti {
	constructor(A) {
		this.A = A; 
	}

	findMinBF() {
		return this.findMinBFHelper(this.A,1,this.A.length-1); 
	}
	findMinBFHelper(A, i, j) {
		if(i==j) return 0; 
		var min = Number.MAX_SAFE_INTEGER; 
		for(var k=i; k<j; k++) {
			var count = this.findMinBFHelper(A, i, k)+
						this.findMinBFHelper(A, k+1, j)+
						A[i-1]*A[k]*A[j]; 
			if(count<min) min = count; 
		}
		return min; 
	}

	findMin() {
		var N = this.A.length; 
		var counts = new Array(N); 
		for(var i=0;i<N;i++) {
			counts[i] = new Array(N)
			counts[i][i] = 0; 
		}

		for(var L=2;L<N;L++) {
			for(var i=1; i<N-L+1; i++) {
				var j = i+L-1; 
				counts[i][j] = Number.MAX_SAFE_INTEGER; 
				for(var k=i; k<j; k++) {
					var q=counts[i][k]+counts[k+1][j]+this.A[i-1]*this.A[k]*this.A[j]; 
					if(q<counts[i][j]) counts[i][j] = q; 
				}
			}
		}
		return counts[1][N-1]
	}
}


var chain = new chainMulti([40, 20, 30, 10, 30]);
console.log(chain.findMinBF());  
console.log(chain.findMin());  
