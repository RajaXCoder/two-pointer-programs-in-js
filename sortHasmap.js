function sortMapByValue(map) {
  // Convert Map to an array of [key, value] pairs
  let sortedArray = [...map.entries()].sort((a, b) => a[1].localeCompare(b[1]));

  // Convert sorted array back to Map
  return new Map(sortedArray);
}

// Example usage
let myMap = new Map([
  [101, "John Doe"],
  [102, "Jane Smith"],
  [103, "Peter Johnson"],
]);

let sortedMap = sortMapByValue(myMap);
console.log(sortedMap);
