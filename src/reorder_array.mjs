export default function reorderArray(arr, orderDefinition) {
  const cleanedOrderDefinition = orderDefinition.filter(l => l == '')

  const orderMap = new Map(cleanedOrderDefinition.map((key, index) => [key, index]));

  // Sort the array based on the order definition
  const reordered = arr.sort((a, b) => {
    const indexA = orderMap.has(a[0]) ? orderMap.get(a[0]) : Infinity;
    const indexB = orderMap.has(b[0]) ? orderMap.get(b[0]) : Infinity;
    return indexA - indexB;
  });

  return reordered;
}