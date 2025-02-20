// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

function singleDigit(nums) {
    // base case
    if (nums.length == 1) {
        return nums[0]
    }

    // create a hash map
    let hash = {}
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in hash) {
            hash[nums[i]]++
        } else {
            hash[nums[i]] = 1
        }
    }

    // loop through the hash and check if the value equals to 1
    for (key in hash) {
        if (hash[key] == 1) {
            return key
        }
    }
}

console.log(singleDigit([2,2,1]))
console.log(singleDigit([4,1,2,1,2]))
console.log(singleDigit([1]))

 

// Example 1:
// Input: nums = [2,2,1]
// Output: 1

// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4

// Example 3:
// Input: nums = [1]
// Output: 1
 

// Constraints:

// 1 <= nums.length <= 3 * 104
// -3 * 104 <= nums[i] <= 3 * 104
// Each element in the array appears twice except for one element which appears only once.
