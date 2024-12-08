export default function addSpaces(orderArray, input) {
    // Create a map from the input array for quick lookup
    const inputMap = new Map(input.map(row => [row[0], row]));
  
    // Build the result array based on the orderArray
    const result = orderArray.map(item => {
      if (item === ' ') {
        return []; // Add an empty row for spaces
      }
      return inputMap.get(item) || []; // Get the matching row from input or an empty row if not found
    });
  
    return result;
  }