
import fs from 'fs'

export default function fileToArray(filePath) {
    try {
      // Read the file content
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      
      // Split the content into an array of lines
      const linesArray = fileContent.split(/\r?\n/).filter(line => line.trim() !== '');
      
      return linesArray;
    } catch (error) {
      console.error('Error reading the file:', error.message);
      return [];
    }
  }
  