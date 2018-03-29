var canFinish = function(numCourses, prerequisites) {
    var indegree = new Array(numCourses).fill(0); 
    var queue = []; 

    for(let pair of prerequisites){
        indegree[pair[1]]++;
    }

    for(let i=0;i<indegree.length;i++){
        if(indegree[i]==0){
            queue.push(i);
        }
    }

    while(queue.length>0){
        numCourses--;
        var course = queue.shift(); 
        for(let pair of prerequisites){
            if(pair[0]==course){
                indegree[pair[1]]--;
                if(indegree[pair[1]]==0){
                    queue.push(pair[1]);
                }
            }
        }
    }
    return numCourses==0;
}

console.log(canFinish(2, [[1,0]] ) )
