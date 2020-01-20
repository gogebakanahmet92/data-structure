# Quick Sort

- Like mergesort, Quicksort is also based on the divide-and-conquer paradigm.
- But it uses this technique in a somewhat opposite manner, as all the hard work is done before the recursive calls.
- Basic idea:
  - First, arbitrarily choose an item and partition the array into three groups: those smaller than the chosen item, those equal to the chosen item and those larger than the chosen item,
  - Then, sort the first and last groups recursively,
  - Finally, concatenate three groups
- Issues to consider:
  - How to pick the pivot? (First Element, Random , Median-Of-Three)
  - How to partition?

## Quick Sort Analysis

- Average Case --> O(NlogN)
- Worst Case --> O(N**2)  (Pivot is the smallest or largest element all the time)
- Small arrays: Quicksort is slower than insertion sort when is N is small (say, N ≤ 20).