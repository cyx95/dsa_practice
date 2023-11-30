// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// O(n)
function onceOrTwice(nums) {
    // create a hash map
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in hash) {
      hash[nums[i]]++;
    } else {
      hash[nums[i]] = 1;
    }
  }


  // loop through the hash
  for (key in hash) {
    // if the value is greater or equal to 2 automatically return true
    if (hash[key] >= 2) {
        return true
    } else {
        return false
    }
  }
}

//Testing
console.log(onceOrTwice([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
console.log(onceOrTwice([1, 2, 3, 4]));
console.log(onceOrTwice([1, 2, 3, 1]));
console.log(onceOrTwice([1, 2, 3, 4, 1, 2, 3]));

// Example 1:
// Input: nums = [1,2,3,1]
// Output: true

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false

// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109
