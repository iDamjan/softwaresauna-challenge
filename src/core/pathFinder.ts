function findStartingPoint(pathsArray) {
  for (let index = 0; index < pathsArray.length; index++) {
    const path = pathsArray[index];
    const startingPointColumn = path.indexOf("@");

    const startingPointRow = index;

    // If starting point index is bigger or equal to 0, means start is found
    if (startingPointColumn >= 0) {
      return { startingPointRow, startingPointColumn };
    }
  }

  // If no starting point was found return -1
  // To be consistent we will return both indexes as -1
  return { startingPointIndex: -1, pathIndex: -1 };
}

export default findStartingPoint;
