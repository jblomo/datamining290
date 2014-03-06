name: inverse
layout: true
class: left, top, inverse

---

# Hierarchical & Density

---

## Methods

  + Partitioning
    + Construct ```k``` groups, evaluate fitness, improve groups
  + Hierarchical
    + Agglomerate items into groups, creating "bottom-up"
    clusters; or divide set into ever smaller groups, creating "top-down"
    clusters
  + Density
    + Find groups by examining continuous density within a potential
    group
  + Grid
    + Chunk space into units, cluster units instead of individual records

???

## Algorithms

  + Partitioning
    + k-means, k-medoid
  + Hierarchical
    + Build groups 1 "join" at a time, examining distance between
    two things that can be joined together, if close, combine groups. Reverse:
    divisive.
  + Density
    + Many of the above methods just look for distance.  This method
    tries to find groups that might be strung out, but maintain a density.  Think
    about an asteroid belt.  It is one group, but not clustered together in a way
    you typically think.
  + Grid
    + Read the book

---

## k-means Limitations

  + Must supply ```k```, the number of clusters
  + Clusters must be disjoint*

???

## Difference

  + *We'll learn about "fuzzy" clustering next time, where cluster membership
    is a probability

---

## k-means Limitations

  + Must supply ```k```, the number of clusters
  + Clusters must be disjoint*

## Another Approach

  + Hierarchical clustering builds up clusters incrementally

???

## Difference

  + Hierarchical can find cluster of clusters
  + Can illustrate clusters at many levels, let human interpret what makes
    sense without guess-and-check
  + Clusters are built 1 cluster at a time, starting with all points being
    their own cluster

---

## Agglomerative

  + All points are separate clusters
  + Find closest clusters: Join them
  + Repeat

<img src="img/agglomerative.png" width=100% />

???

## Bottom-up

  + Any questions about this?
  + What does "close" mean?

---

## Cluster Distance

  + Minimum
    + Use the two closest points
  + Maximum
    + Use the two farthest points
  + Mean
    + Use the mean of the two clusters
  + Average
    + Sum of the distances of all pairs, divided by number of pairs

???

## Meta Distance

  + These are actually distance metrics for clusters that translate down to
    distance metrics for points.
  + Still need to decide distance measures for points: Euclidean, Manhattan,
    etc. And that's just for numerical distance
  + Choose based on expected cluster topology, cross validation testing using
    human observers

---

## Termination

  + Define have ```k``` clusters
  + Distance between clusters exceeds threshold
  + Fitness function for cluster

???

## Details

  + If you wanted to look at all potential ```k```, set ```k = 1```, then look at sub
    clusters
  + Distance or fitness function (eg. density or minimum intra-cluster
    similarity score) can help define ```k``` automatically

---

## Dendrogram

  + Display of clustered groups
  + Concise visualization: groups do not need to be identified or named
  + Y axis can represent iteration


<img src="img/dendrogram.png" width=100% />

???

## Usefulness

  + Can move up and down clustering to make sense of individual clusters

---

## Chameleon

  + Discover large number of small clusters
  + Group together small clusters
  + Join clusters with a high interconnectedness relative to their existing
    interconnectedness

<img src="img/chameleon.png" width=105% />

???

## Details

  + Mix of partition & agglomerative
  + Partition by finding groups of k-nearest neighbors: A, B in the same group
    if A is a k-nearest neighbor of B.
  + Interconnectedness measured by aggregate proximity in the group, or using a
    network model the book provides details on (10.3.4)

---

## Results

<img src="img/chameleon-cluster.png" width=100% />

???

## Properties

  + Tends to "follow" clusters as long as interconnectedness stays high

---

## Density: DBSCAN

  + Find "paths" of points that are in "dense" regions
  + Paths: points within a distance ```e```
  + Density: surrounded by ```MinPts``` within region of radius ```e```

<img src="img/density-connected.png" width=90% />

???

## Details

  + Can find non linear "paths" to follow as long as they stay dense

---

## Density Trade-offs

.left-column[

  + Finds clusters of different sizes, shapes
  + DBSCAN is sensitive to the parameters used. How big is ```e```?  How many
    points is "dense"?
]

.right-column[
.white-background[
<img src="img/DBSCAN.png" width=100% />
]
]

???

## Details

  + img: http://en.wikipedia.org/wiki/DBSCAN

---

## Algorithm Choice

  + Simple techniques often work surprisingly well
  + Choose other algorithms to tackle specific problems
  + Evaluation metrics

???

## Lessons

  + Just like Naive Bayes, we make assumptions about our data that turn out
    to be right enough: clusters are uniformly sized, don't wander around our
    dimensioned space
  + Topic drift: tendency for a cluster to change its properties slowly over
    time: e.g., articles on politics might use different words
  + Performance: many of these algorithms are computationally expensive, hard to
    distribute.  Book goes into run times and where to make compromises on the
    algorithm
  + Figure out a fitness function for your metric.  If you used these clusters
    to take action, what would be the result?

---

## Elbow Method

  + Calculate intra-cluster variance
  + Compare to data set variance (F-test)
  + Find point where marginal gain of explicative power decreases

<img src="img/elbow.JPG" width=70% />

---

## Labels

  + Clustering is an example of unsupervised learning
  + But after clustering, humans can label clusters, and their contents
  + Now one can use homogeneity metrics to evaluate clusters

???

## Homogeneity

  + Gini Index
  + Entropy
  + Precision / Recall

---

# *Break*
