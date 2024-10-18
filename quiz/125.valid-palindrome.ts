/*
 * @lc app=leetcode id=125 lang=typescript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
function isPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && !isAlphanumeric(s[left])) {
      left += 1;
    }
    while (right > left && !isAlphanumeric(s[right])) {
      right -= 1;
    }
    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }
    left += 1;
    right -= 1;
  }
  return true;
}

function isAlphanumeric(s: string): boolean {
  const regex = /^[A-Za-z0-9]$/;
  const result = regex.test(s);
  return result;
}

// @lc code=end
