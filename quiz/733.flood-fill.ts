/*
 * @lc app=leetcode id=733 lang=typescript
 *
 * [733] Flood Fill
 */

// @lc code=start
function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number
): number[][] {
  if (image[sr][sc] === color) {
    return image;
  }
  fill(image, sr, sc, image[sr][sc], color);
  return image;
}

function fill(
  image: number[][],
  sr: number,
  sc: number,
  color: number,
  newColor: number
) {
  if (
    sr < 0 ||
    sr >= image.length ||
    sc < 0 ||
    sc >= image[0].length ||
    image[sr][sc] !== color
  ) {
    return;
  }
  image[sr][sc] = newColor;
  fill(image, sr - 1, sc, color, newColor);
  fill(image, sr + 1, sc, color, newColor);
  fill(image, sr, sc - 1, color, newColor);
  fill(image, sr, sc + 1, color, newColor);
}
// @lc code=end
