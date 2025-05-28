import walkPath from "./core/pathWalker";

import { testMap1, testMap2, testMap3 } from "./data/testMaps";
import findStartingPoint from "./core/pathFinder";

function findCharactersInPath(pathsArray) {
  // 1. Exit conditions
  // - the path does not start with a start mark -> @
  // - the path does not end with an -> x
  // - Ignore stuff after the end of x

  const { startingPointRow, startingPointColumn } =
    findStartingPoint(pathsArray);

  const result = walkPath(pathsArray, startingPointRow, startingPointColumn);

  console.log(result);
}

findCharactersInPath(testMap1);
