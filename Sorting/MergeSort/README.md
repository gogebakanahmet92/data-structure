# Merge Sort

- Mergesort algorithm is one of the two important divide-and-conquer sorting algorithms (the other one is quicksort).
- It is a recursive algorithm.
  - Divides the list into halves,
  - Sorts each half separately, and
  - Then merges the sorted halves into one sorted array.

## Merge Sort Analysis

- Mergesort is an extremely efficient algorithm with respect to time. 
  - Both worst case and average cases are O(n × log n)
- Running time depends heavily on relative costs of comparing and moving elements in the array and the temporary array. These costs are language dependent.
- Mergesort requires an extra array whose size equals to the size of the original array.
- If we use a linked list, we do not need an extra array
  - But, we need space for the links
  - And, it will be difficult to divide the list into half ( O(n) )