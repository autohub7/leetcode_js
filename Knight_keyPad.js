/*
Given a phone keypad as shown below:

1 2 3
4 5 6
7 8 9
  0
How many different 10-digit numbers can be formed starting from 1? The constraint is that the movement from 1 digit to the next is similar to the movement of the Knight in a chess game.

https://stackoverflow.com/questions/2893470/generate-10-digit-number-using-a-phone-keypad
*/

class kNightTour {
   constructor() {
     this.xMove = [2, 1, -1, -2, -2, -1, 1, 2];  // Knight moves 
     this.yMove = [1, 2, 2, 1, -1, -2, -2, -1];
   }
    // Check if the prev psosition validate
    isSafe(x, y) {
    	return (x >= 0 && x < 4 && y >= 0 && y < 3 && !(x == 3 && y ==0) && !(x == 3 && y ==2));
    }

    numberToMap(fr) {
        switch(fr) {
            case 0: 
                return [0,0]
                break;
            case 1:
                return [0,1]
                break; 
            case 2: 
                return [0,2]
                break; 
            case 3: 
                return [1,0]
                break; 
            case 4: 
                return [1,1]            
                break; 
            case 5: 
                return [1,2]
                break; 
            case 6: 
                return [2,0]
                break; 
            case 7:
                return [2,1]
                break; 
            case 8: 
                return [2,2]
                break; 
            case 9: 
                return [3,2]
                break; 
            default: 
                console.log("Out of Range"); 
        }   
    }

	getprev(x, y) {
		var res = []; 
		for(var i=0, j=0; i<this.xMove.length; i++, j++) {
			if(this.isSafe(x+this.xMove[i], y+this.yMove[j])) 
    			res.push([x+this.xMove[i], y+this.yMove[j]])	
		}
		return res; 
	}

    solveFromOne(start, phonelen) {
    	var map = new Array(4).fill(1).map(()=> new Array(3).fill(1)); 
    	for(var digit=2; digit<=phonelen; digit++) {
    		for(var fr=0; fr<10; fr++) {
                // Convert from digit to coordinates on map
    			var coordi = this.numberToMap(fr)

                // Get All [x, y] previous coordinates 
    			var prevPos = this.getprev(coordi[0], coordi[1])
    			for(var i = 0; i<prevPos.length; i++) {
    				var prevP = prevPos[i]; 
    				map[coordi[0]][coordi[1]] += map[prevP[0]][prevP[1]];
    			}
    		}
    	}

        var ansPos = this.numberToMap(start)
    	return map[ansPos[0]][ansPos[1]]
    }
}

var kn = new kNightTour(); 
console.log(kn.solveFromOne(1, 2)); 