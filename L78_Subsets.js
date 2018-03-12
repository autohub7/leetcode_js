var subset = function(nums) {
  var res = []; 
  subsetHelper(nums, 0, [], res)
  return res; 
} 

function subsetHelper(nums, index, curr, res) {  
  res.push(curr.slice())
  for (var i = index; i < nums.length; i++) {
    curr.push(nums[i])
    subsetHelper(nums, i+1, curr, res); 
    curr.pop(nums[i])
  }
}

//console.log(subset([1,2,3]))