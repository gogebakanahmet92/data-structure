# Heap Sort

- The main problem with this algorithm is that it uses an extra array for the items exiting the heap.
- We can avoid this problem as follows:
  - After each deleteMin, the heap shrinks by 1.
  - Thus the cell that was last in the heap can be used to store the element that was just deleted.
  - Using this strategy, after the last deleteMin, the array will contain all elements in decreasing order.
  - If we want them in increasing order we must use a max heap.

## Heap Sort Analysis

- It is an O(NlogN) algorithm.
  - First phase: Build heap O(N)
  - Second phase: N deleteMax operations: O(N log N).
- Detailed analysis shows that, the average case for heapsort is poorer than quick sort.
  - Quicksort’s worst case however is far worse.
- An average case analysis of heapsort is very complicated, but empirical studies show that there is little difference between the average and worst cases.
  - Heapsort usually takes about twice as long as quicksort.
  - Heapsort therefore should be regarded as something of an insurance policy.
  - On average, it is more costly, but it avoids the possibility of O(N2).