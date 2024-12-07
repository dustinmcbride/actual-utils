import fs from 'fs'
import path from 'path';

// Function to write CSV array to a file
export default function writeCsvToFile(csvArray, outputPath) {

    if (!fs.existsSync(outputPath)){
        fs.mkdirSync(outputPath);
    }

  // Get the current date in YYYY-MM-DD format
  const currentDate = new Date().toISOString().split('T')[0];
  const fileName = `${currentDate}.csv`;
  
  const filePath = path.resolve('./', outputPath, fileName);

  // Convert the CSV array to string format
  const csvContent = csvArray.map(row => row.join(',')).join('\n');

  // Write the CSV content to the file
  fs.writeFileSync(filePath, csvContent, 'utf-8');
  console.log(`\n\nCSV file written successfully: ${filePath}\n`);
}