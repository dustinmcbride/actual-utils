// import importData from "./import_data.mjs";
import reorderArray from "./reorder_array.mjs"
import fileToArray from "./file_to_array.mjs";
import formatInput from "./format_input.mjs"
import diffArrays from "./diff_arrays.mjs";
import writeCsvToFile from "./write_csv.mjs"

const args = process.argv.slice(2); // Extract arguments starting from index 2

const inputFileName = args[0] || "./input.txt" 
const orderFileName = args[1] || "./order.txt"
const outputPath = 'output'

// Read Files File
const inputArray = fileToArray(inputFileName) 
const orderArray = fileToArray(orderFileName)

// Format input
let formattedInput = formatInput(inputArray)

// Order
const orderedInput = reorderArray(formattedInput, orderArray)


// Diff 
const { additions, removals } = diffArrays(orderArray, orderedInput)

if (additions.length) {
    console.log('\n⚠️ Additions (in `input` but not in `order`):')
    console.log(additions);
}

if (removals.length) {
    console.log('\n⚠️  Removals (in `order` but not in `input`):')
    console.log(removals);
}

// Write CSV
writeCsvToFile(orderedInput, outputPath)
