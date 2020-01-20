median = (arr, left, right) => {
  let center = (left + right) / 2;
  if (arr[center] < arr[left]) {
    [arr[left], arr[center]] = [arr[center], arr[left]];
  }
  if (arr[right] < arr[left]) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
  }
  if (arr[right] < arr[center]) {
    [arr[right], arr[center]] = [arr[center], arr[right]];
  }
};

quickSort = arr => {
  sort(arr, 0, arr.length - 1);
};

sort = (arr, left, right) => {
  if (left + 20 <= right) {
    let pivot = median(a, left, right);

    let i = left;
    let j = right - 1;

    for (;;) {
      while (arr[++i] < pivot) {}
      while (pivot < a[--j]) {}
      if (i < j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      } else break;
    }
    [arr[i], arr[right - 1]] = [arr[right - 1], arr[i]];

    sort(arr, left, i - 1);
    sort(arr, i + 1, right);
  } else insertionSort(arr, left, right); // Do an insertion sort on the subarray
};
