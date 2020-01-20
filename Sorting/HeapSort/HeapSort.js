const heapSort = arr => {
  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; --i) {
    percDown(arr, i, arr.length);
  }
  for (let j = arr.length - 1; j > 0; --j) {
    let tmp = arr[0];
    arr[0] = arr[j];
    arr[j] = tmp;
    percDown(arr, 0, j);
  }
  return arr;
};

const leftChild = i => 2 * i + 1;

const percDown = (arr, i, n) => {
  let child;
  let tmp;

  for (tmp = arr[i]; leftChild(i) < n; i = child) {
    child = leftChild(i);
    if (child != n - 1 && arr[child] < arr[child + 1]) {
      ++child;
    }
    if (tmp < arr[child]) {
      arr[i] = arr[child];
    } else {
      break;
    }
  }

  arr[i] = tmp;
};
