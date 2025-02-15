function sortMapByValue(map) {
  // Convert Map to an array of [key, value] pairs
  let sortedArray = [...map.entries()].sort((a, b) => a[1].localeCompare(b[1]));

  // Convert sorted array back to Map
  return new Map(sortedArray);
}

// Example usage
let myMap = new Map([
  [101, "Rajasekar"],
  [102, "Siva Prakasam"],
  [103, "Rahul"],
]);

const sortedMap = sortMapByValue(myMap);
console.log(sortedMap);
