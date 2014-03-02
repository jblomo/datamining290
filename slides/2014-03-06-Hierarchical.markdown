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

## k-means Input animate:

  + What did we supply to k-means before we ran it?
  + =k=: number of clusters
  + Clusters disjoint*
  + Hierarchical clustering builds up clusters incrementally

???

## Difference

  + Hierarchical can find cluster of clusters
  + Can illustrate clusters at many levels, let human intemperate what makes
    sense without guess-and-check
  + Clusters are built 1 cluster at a time, starting with all points being
    their own cluster
  + *We'll learn about "fuzzy" clustering next time, where cluster membership
    is a probability

---

## Agglomerative

  + All points are separate clusters
  + Find closest clusters: Join them
  + Repeat

<img src="img/agglomerative.png"/>

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

  + Define have =k= clusters
  + Distance between clusters exceeds threshold
  + Fitness function for cluster

???

## Details

  + If you wanted to look at all potential ```k=, set =k``` to 1, then look at sub
    clusters
  + Distance or fitness function (eg. density or minimum intra-cluster
    similarity score) can help define =k= automatically

---

## Dendrogram two_col:

<img src="img/dendrogram1.jpg"/>


  + Display of clustered groups
  + Concise visualization: groups do not need to be identified or named
  + Y axis can represent iteration

???

## Usefulness

  + Can move up and down clustering to make sense of individual clusters

---

## CHAMELEON two_col:

  + Discover large number of small clusters
  + Group together small clusters
  + Join clusters with a high interconnectedness relative to their existing
    interconnectedness

<img src="img/chameleon.png"/>

???

## Details

  + Mix of partition & agglomerative
  + Partition by finding groups of k-nearest neighbors: A, B in the same group
    if A is a k-nearest neighbor of B.
  + Interconnectedness measured by aggregate proximity in the group, or using a
    network model the book provides details on (10.3.4)

---

## Results

<img src="img/chameleon-cluster.png"/>

???

## Properties

  + Tends to "follow" clusters as long as interconnectedness stays high

---

## Density: DBSCAN two_col:

  + Find "paths" of points that are in "dense" regions
  + Paths: points within a distance =e=
  + Density: surrounded by ```MinPts``` within region of radius =e=

<img src="img/density-connected.png"/>

???

## Details

  + Can find non linear "paths" to follow as long as they stay dense

---

## Density Trade-offs two_col:

<img src="img/DBSCAN.png"/>

  + Finds clusters of different sizes, shapes
  + DBSCAN is sensitive to the parameters used. How big is =e=?  How many
    points is "dense"?

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
    time: eg. articles on politics might use different words
  + Performance: many of these algos are computationally expensive, hard to
    distribute.  Book goes into run times and where to make compromises on the
    algo
  + Figure out a fitness function for your metric.  If you used these clusters
    to take action, what would be the result?

---

## Elbow Method two_col:

  + Calculate intra-cluster variance
  + Compare to data set variance (F-test)
  + Find point where marginal gain of explicative power decreases

<img src="img/elbow.JPG"/>

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




---

next slide is animated - Slide 3
next slide is two column - Slide 7
next slide is two column - Slide 8
next slide is two column - Slide 10
next slide is two column - Slide 11
next slide is two column - Slide 13
