/*
 * @lc app=leetcode id=70 lang=typescript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
function climbStairs(n: number): number {
  let left = 1;
  let right = 1;

  for (let i = 1; i < n; i++) {
    const temp = left;
    left = left + right;
    right = temp;
  }
  return left;
}
// @lc code=end
