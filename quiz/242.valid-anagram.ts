/*
 * @lc app=leetcode id=242 lang=typescript
 *
 * [242] Valid Anagram
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }
  const mapS = new Map<string, number>();
  const mapT = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    mapS.set(s[i], (mapS.get(s[i]) || 0) + 1);
    mapT.set(t[i], (mapT.get(t[i]) || 0) + 1);
  }

  for (let key of mapS.keys()) {
    if (mapS.get(key) !== mapT.get(key)) {
        return false
    }
  }
  return true;
}

// @lc code=end
