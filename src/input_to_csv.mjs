const fs = require('fs');
const path = require('path');

// Function to read the text file and convert to CSV
function textToCsv(inputFile, outputFile) {
  try {
    // Read the input file
    const fileContent = fs.readFileSync(inputFile, 'utf-8');
    
    // Split the file content into an array of entries
    const entries = fileContent.split(/\r?\n/).filter(entry => entry.trim() !== '');

    // Group entries into rows of 
    const rows = [];
    for (let i = 0; i < entries.length; i += 5) {
      rows.push(entries.slice(i, i + 5).map(value => value.replace(/,/g, '')));
    }

    // Convert rows into CSV format
    const csvContent = rows.map(row => row.join(',')).join('\n');

    // Write the output CSV file
    fs.writeFileSync(outputFile, csvContent, 'utf-8');
    console.log(`CSV file created successfully: ${outputFile}`);
  } catch (error) {
    console.error('Error processing the file:', error.message);
  }
}

// Define input and output files
const inputFile = path.resolve(__dirname, 'input.txt'); // Replace 'input.txt' with your file name
const outputFile = path.resolve(__dirname, 'output.csv'); // Replace 'output.csv' with your desired output file name

// Run the conversion
textToCsv(inputFile, outputFile);
