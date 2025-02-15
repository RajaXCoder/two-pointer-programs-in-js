function sortRGBBalls(arr) {
  //used two pointer method
  let low = 0,
    mid = 0,
    high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] === "B") {
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    } else if (arr[mid] === "G") {
      mid++;
    } else {
      // arr[mid] === 'R'
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }

  return arr;
}

// Example usage
console.log(sortRGBBalls(["R", "G", "B", "G", "G", "R", "B", "B", "G"]));
