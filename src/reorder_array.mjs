export default function reorderArray(arr, orderDefinition) {
    // Create a map for the index of each element in arr2
  // Create a map for the order definition
  const orderMap = new Map(orderDefinition.map((key, index) => [key, index]));

  // Sort the array based on the order definition
  const reordered = arr.sort((a, b) => {
    const indexA = orderMap.has(a[0]) ? orderMap.get(a[0]) : Infinity;
    const indexB = orderMap.has(b[0]) ? orderMap.get(b[0]) : Infinity;
    return indexA - indexB;
  });

  return reordered;
}