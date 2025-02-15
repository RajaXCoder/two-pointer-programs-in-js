const sortedSquares = (arr) => {
  // I used Two pointer method
  let n = arr.length;
  let result = new Array(n);
  let left = 0,
    right = n - 1;
  let index = n - 1;

  while (left <= right) {
    let leftSquare = arr[left] * arr[left];
    let rightSquare = arr[right] * arr[right];

    if (leftSquare > rightSquare) {
      result[index] = leftSquare;
      left++;
    } else {
      result[index] = rightSquare;
      right--;
    }
    index--;
  }

  return result;
};

console.log(sortedSquares([-12, -8, -7, -5, 2, 4, 5, 11, 15]));
