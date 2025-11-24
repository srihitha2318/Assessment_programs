function countCategories(arr) {
  const counts = arr.reduce((acc, category) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  return counts;
}

// Extra Challenge: Sort categories by count (descending)
function getSortedCategories(countObj) {
  return Object.entries(countObj)
    .sort((a, b) => b[1] - a[1])   // sort by count
    .map(([category]) => category); // return only category names
}

// Example Input
const categories = [
  "electronics",
  "clothing",
  "electronics",
  "toys",
  "clothing",
  "toys",
  "toys"
];

// Execute
const counted = countCategories(categories);
console.log(counted);

const sorted = getSortedCategories(counted);
console.log(sorted);
