var sortColors = function(nums) {
    var k=0; 
    var j = nums.length-1; 
    var i = 0;
    
    while(k <= j) {
        if(nums[k] === 0) {
            swap(nums, k, i);
            i++; 
        } else if(nums[k] === 2) {
            swap(nums, k, j);
            j--; 
        } else {
            k++;
        }
    }
    return nums
};

function swap(arr, i, j) {
    return [arr[i], arr[j]] = [arr[j], arr[i]]
}

//console.log(sortColors([1,0,0,2,1,0,2]))

