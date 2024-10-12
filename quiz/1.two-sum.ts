/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    const map = new Map();
    for ( let i = 0; i < nums.length; i++ ) {
        const sub = target - nums[i]
        if (map.has(sub)) {
            const vals = [map.get(sub), i]
            return vals
        }
        map.set(nums[i], i)
    }
    console.log(map)
    return []
};
// @lc code=end

