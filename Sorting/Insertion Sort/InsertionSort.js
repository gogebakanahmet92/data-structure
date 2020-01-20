const insertionSort = arr => {
  for (let p = 0; p < arr.length; p++) {
    let tmp = arr[p];
    let j;
    for (j = p; j > 0 && tmp < arr[j - 1]; --j) {
      arr[j] = arr[j - 1];
    }
    arr[j] = tmp;
  }
  return arr;
};
