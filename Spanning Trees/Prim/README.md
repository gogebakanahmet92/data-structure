# Prim's Algorithm

In computer science, **Prim's algorithm** is a greedy algorithm that
finds a minimum spanning tree for a weighted undirected graph.

The algorithm operates by building this tree one vertex at a
time, from an arbitrary starting vertex, at each step adding
the cheapest possible connection from the tree to another vertex.

## Minimum Spanning Tree

A **minimum spanning tree** (MST) or minimum weight spanning tree
is a subset of the edges of a connected, edge-weighted
(un)directed graph that connects all the vertices together,
without any cycles and with the minimum possible total edge
weight. That is, it is a spanning tree whose sum of edge weights
is as small as possible. More generally, any edge-weighted
undirected graph (not necessarily connected) has a minimum
spanning forest, which is a union of the minimum spanning
trees for its connected components.

![Minimum Spanning Tree](https://www.baeldung.com/cs/wp-content/uploads/sites/4/2020/01/prim.jpg)
