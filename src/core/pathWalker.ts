import { checkDirection } from "./directionChecker";
import { checkCollectingChar } from "../utils/validations";

// Add a visited set to track coordinates
function walkPath(pathsArray, startRow, startCol) {
  let currentRow = startRow;
  let currentCol = startCol;
  let charactersInPath = "";
  let pathAsCharacters = "";

  // Track visited coordinates as strings "row,col"
  const visited = new Set();
  visited.add(`${startRow},${startCol}`);

  // Walk through the elements, break the cycle if 'x' or not a valid direction
  while (true) {
    const currentChar = pathsArray[currentRow][currentCol];

    if (currentChar === "x") {
      pathAsCharacters += currentChar;
      break;
    }

    // Find next direction (pass visited set)
    const direction = checkDirection(
      pathsArray,
      currentRow,
      currentCol,
      visited
    );

    if (!direction) {
      return {
        error: "No valid direction found",
        charactersInPath,
        pathAsCharacters,
      };
    }

    // Collect letters
    if (checkCollectingChar(currentChar)) {
      charactersInPath += currentChar;
    }
    pathAsCharacters += pathsArray[currentRow][currentCol];

    // Move to next position
    currentRow += direction.row;
    currentCol += direction.col;

    // Mark as visited
    visited.add(`${currentRow},${currentCol}`);
  }

  return { charactersInPath, pathAsCharacters };
}

export default walkPath;
