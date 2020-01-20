mergeSort = arr => {
  if (arr.length <= 1) {
    return arr;
  }

  const middleElement = Math.floor(arr.length / 2);
  const leftSide = arr.slice(0, middleElement);
  const rightSide = arr.slice(middleElement);

  return merge(mergeSort(leftSide), mergeSort(rightSide));
};

merge = (leftSide, rightSide) => {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftSide.length && rightIndex < rightSide.length) {
    if (leftSide[leftIndex] < rightSide[rightIndex]) {
      result.push(leftSide[leftIndex]);
      leftIndex += 1;
    } else {
      result.push(rightSide[rightIndex]);
      rightIndex += 1;
    }
  }

  return result
    .concat(leftSide.slice(leftIndex))
    .concat(rightSide.slice(rightIndex));
};
