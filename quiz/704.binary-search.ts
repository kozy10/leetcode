/*
 * @lc app=leetcode id=704 lang=typescript
 *
 * [704] Binary Search
 */

// @lc code=start
function search(nums: number[], target: number): number {
  let l = 0,
    r = nums.length - 1,
    m; // declare l and r ptr, initialize mid ptr
  while (l <= r) {
    m = Math.floor((l + r) / 2); // middle point between l and r ptrs
    if (nums[m] == target) {
      return m;
    } else if (nums[m] < target) {
      l = m + 1;
    } // check right half
    else {
      r = m - 1;
    } // check left half
  }
  return -1;
}
// @lc code=end
