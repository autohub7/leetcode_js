var twoSum = function(nums, target) {
    var hash = {};
    for(var i = 0; i < nums.length; i++) {
        if(hash[nums[i]] !== undefined) {
            return [hash[nums[i]], i]
        } else {
            hash[target - nums[i]] = i;
        }
    }
    return [];
}