// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.


// brute O(n^2)
function targetIndex(nums, target) {
    // keep track of one number
    for (let i = 0; i < nums.length; i++) {
        // keep track of second number
        for (let j = 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
}

// O(n)
function targetIndex(nums, target) {
    // initialize a map
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        // looking for the number of target minus nums[i]
        let seek = target - nums[i]
        // if that number is in the map and the index is not equal to the current index, we have found our two indexes
        if (map.has(seek) && map.get(seek) != i) {
            return [map.get(seek), i]
        }
        // else set the value and index into the map
        map.set(nums[i], i)
    }
}

// Testing
console.log(targetIndex([2,7,11,15], 9))
console.log(targetIndex([3,2,4], 6))
console.log(targetIndex([3,3], 6))

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]
 
// Constraints:
// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
