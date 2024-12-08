import addSpaces from "./add_spaces.mjs";
import diffArrays from "./diff_arrays.mjs";
import fileToArray from "./file_to_array.mjs";
import formatInput from "./format_input.mjs"
import reorderArray from "./reorder_array.mjs"
import writeCsvToFile from "./write_csv.mjs"

const args = process.argv.slice(2);

const inputFileName = args[0] || "./input.txt" 
const orderFileName = args[1] || "./order.txt"
const outputPath = 'output'

// Read Files
const inputArray = fileToArray(inputFileName) 
const orderArray = fileToArray(orderFileName)

// Format input
let formattedInput = formatInput(inputArray)

// Order
const orderedInput = reorderArray(formattedInput, orderArray)

// Diff 
const { hasDiff } = diffArrays(orderArray, orderedInput)


// Add Spaces
if (hasDiff) {
    console.log("🚨 Unable to space data because of diffs")
    writeCsvToFile(orderedInput, outputPath)
} else {
    const spacedData = addSpaces(orderArray, orderedInput)
   writeCsvToFile(spacedData, outputPath)
}
