/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
const bracketMap = new Map<string, string>([
  ["(", ")"],
  ["{", "}"],
  ["[", "]"],
]);

function isValid(s: string): boolean {
  const chars = s.split("");
  const stack: string[] = [];
  for (let i = 0; i < chars.length; i++) {
    if (isOpenBracket(chars[i])) {
      stack.push(chars[i]);
    } else {
      if (stack.length === 0) {
        return false;
      }
      const top = stack.pop();
      if (top === undefined) {
        return false;
      }
      if (!isMatchBracket(top, chars[i])) {
        return false;
      }
    }
  }
  if (stack.length !== 0) {
    return false;
  }
  return true;
}

function isOpenBracket(s: string): boolean {
  if (["(", "{", "["].includes(s)) {
    return true;
  }
  return false;
}

function isMatchBracket(first: string, second: string): boolean {
  if (!isOpenBracket(first)) {
    return false;
  }
  if (bracketMap.get(first) === second) {
    return true;
  }
  return false;
}
// @lc code=end
