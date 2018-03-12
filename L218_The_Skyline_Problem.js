/*

Reference:
https://github.com/mission-peace/interview/blob/master/src/com/interview/geometry/SkylineDrawing.java
*/

/*
  To use treeMap 
  npm install treemap-js
  https://www.npmjs.com/package/treemap-js
*/
// !!! Please replace treeMap in your local 
var treeMap = require('../DS/treeMap.js')
class BuildingPoint {
	constructor(x, height, isStart) {
		this.x = x;
		this.height = height; 
		this.isStart = null;
	}
}

//first compare by x
//If they are same then use this logic
//if two starts are compared then higher height building should be picked first
//if two ends are compared then lower height building should be picked first
//if one start and end is compared then start should appear before end
var skySort = function(point) {
	point.sort((a, b) => {
		if (a.x < b.x) {
		return -1;
		}
		else if (a.x > b.x) {
		return 1;
		} else {
			if(a.isStart == true && b.isStart == true) {
				if(a.height < b.height) return 1;
				if(a.height > b.height) return -1; 
			} else if(a.isStart == false && b.isStart == false) {
				if(a.height < b.height) return -1;
				if(a.height > b.height) return 1; 
			}
		}
	})
}

var getSkyLine = function(buildings) {
	var newbuildings = []; 
	var i=0; 
	var j=0; 
	var result = []; 

	for(var i=0;i<buildings.length;i++) {
		newbuildings[j] = new BuildingPoint; 
		newbuildings[j].x = buildings[i][0]; 
		newbuildings[j].height = buildings[i][2]; 
		newbuildings[j].isStart = true; 
		j++;
		newbuildings[j] = new BuildingPoint; 
		newbuildings[j].x = buildings[i][1]; 
		newbuildings[j].height = buildings[i][2]; 
		newbuildings[j].isStart = false; 
		j++;
	}

	skySort(newbuildings); 
	var queue = new treeMap; 
	queue.set(0, 1); 
	var prevMaxHeight = 0; 
	for(var i=0;i<newbuildings.length;i++) {
		//if it is start of building then add the height to map. If height already exists then increment
        //the value
        //console.log(newbuildings[i].height)
		var height_q = queue.get(newbuildings[i].height)
		if(newbuildings[i].isStart === true) {	
			if(height_q == undefined) {
				queue.set(newbuildings[i].height, 1)
			} else {
				height_q++; 
				queue.set(newbuildings[i].height, height_q)
			}
		} else {
			if(height_q == 1) {
				queue.remove(newbuildings[i].height)
			} else {
				height_q--; 
				queue.set(newbuildings[i].height, height_q)
			}
		}

		var currentMaxHeight = 0; 
		var getMax = queue.getTree();
		while(getMax.right !== null) {
			getMax = getMax.right;
		}
		var currentMaxHeight = getMax.key; 
        //if height changes from previous height then this building x becomes critcal x.
        // So add it to the result.
		if(prevMaxHeight !== currentMaxHeight) {
			result.push([newbuildings[i].x, currentMaxHeight])
			prevMaxHeight = currentMaxHeight; 
		}
	}
	return result; 

}

/*
var buildings = 
[
	[1, 3, 4],
	[3, 4, 4], 
	[2, 6, 2], 
	[8, 11, 4], 
	[7, 9, 3],
	[10, 11, 12]
]; 

console.log(getSkyLine(buildings))
*/