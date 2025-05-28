import { checkHorizontalChar } from "../utils/validations";

import { checkVerticalChar, isValidAndUnvisited } from "../utils/validations";
import { DIRECTIONS } from "../constants/directions";

// Update checkDirection to use visited set
export function checkDirection(
  pathsArray,
  pathIndex,
  startingPointIndex,
  visited = new Set()
) {
  const currentRow = pathIndex;
  const currentCol = startingPointIndex;

  const possibleDirections = {
    UP: { canGo: false, handler: checkVerticalChar },
    DOWN: { canGo: false, handler: checkVerticalChar },
    LEFT: { canGo: false, handler: checkHorizontalChar },
    RIGHT: { canGo: false, handler: checkHorizontalChar },
  };

  Object.keys(possibleDirections).forEach((direction) => {
    possibleDirections[direction] = isValidAndUnvisited(
      currentRow + DIRECTIONS[direction].row,
      currentCol + DIRECTIONS[direction].col,
      visited,
      pathsArray,
      possibleDirections[direction].handler
    );
  });

  // Rest of your existing logic...
  const validDirections = [];
  if (possibleDirections.UP) validDirections.push(DIRECTIONS.UP);
  if (possibleDirections.DOWN) validDirections.push(DIRECTIONS.DOWN);
  if (possibleDirections.LEFT) validDirections.push(DIRECTIONS.LEFT);
  if (possibleDirections.RIGHT) validDirections.push(DIRECTIONS.RIGHT);

  if (validDirections.length === 1) {
    return validDirections[0];
  }

  // Handle multiple directions case...
  return validDirections.length > 0 ? validDirections[0] : null;
}
