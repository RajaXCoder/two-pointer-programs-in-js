function minPlatforms(arr, dep) {
  // Convert time to minutes (e.g., "9:40" -> 9*60 + 40)
  const convertToMinutes = (time) => {
    let [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes;
  };

  let arrival = arr.map(convertToMinutes).sort((a, b) => a - b);
  let departure = dep.map(convertToMinutes).sort((a, b) => a - b);

  //   console.log(arrival);

  let platforms = 0,
    maxPlatforms = 0;
  let i = 0,
    j = 0;

  while (i < arrival.length && j < departure.length) {
    if (arrival[i] < departure[j]) {
      platforms++; // A train arrives, need one more platform
      maxPlatforms = Math.max(maxPlatforms, platforms);
      i++;
    } else {
      platforms--; // A train departs, free one platform
      j++;
    }
  }

  return maxPlatforms;
}

// Example usage
console.log(
  minPlatforms(
    ["9:00", "9:40", "9:50", "11:00", "15:00", "18:00"],
    ["9:10", "12:00", "11:20", "11:30", "19:00", "20:00"]
  )
);
// Output: 3

// console.log(minPlatforms(["9:00", "9:40"], ["9:10", "12:00"]));
// Output: 1
