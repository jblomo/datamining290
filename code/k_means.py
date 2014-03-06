###
# Implement simple k-means clustering using 1 dimensional data
#
##/

dataset = [
    -13.65089255716321, -0.5409562932238607, -88.4726466247223,
    39.30158828358612, 4.066458182574449, 64.64143300482378,
    38.68269424751338, 33.42013676314311, 31.18603331719732,
    -0.2027616409406292, 45.13590038987272, 30.791899783552395,
    61.1727490302448, 18.167220741624856, 88.88077709786394,
    -1.3808002119514704, 50.14991362212521, 55.92029956281276,
    -6.759813255299466, 34.28290084421072
]

k = 2  # number of clusters


###
# Helper functions
# Fill in TODOs where needed
##/

def pick_centroids(xs, num):
    """Return list of num centroids given a list of numbers in xs"""
    ###
    # TODO select and return centroids
    return [1, 2]
    ##/


def distance(a, b):
    """Return the distance of numbers a and b"""
    ###
    # TODO return correct expression
    return 0
    ##/


def centroid(xs):
    """Return the centroid number given a list of numbers, xs"""
    ###
    # TODO calculate and return centroid
    return 0
    ##/


def cluster(xs, centroids):
    """Return a list of clusters centered around the given centroids.  Clusters
    are lists of numbers."""

    clusters = [[] for c in centroids]

    for x in xs:
        # find the closest cluster to x
        dist, cluster_id = min(
            (distance(x, c), cluster_id) for cluster_id, c in enumerate(centroids)
        )
        # place x in cluster
        clusters[cluster_id].append(x)

    return clusters


def iterate_centroids(xs, centroids):
    """Return stable centroids given a dataset and initial centroids"""

    err = 0.001  # minimum amount of allowed centroid movement
    observed_error = 1  # Initialize: maxiumum amount of centroid movement
    new_clusters = [[] for c in centroids]  # Initialize: clusters

    while observed_error > err:
        new_clusters = cluster(xs, centroids)
        new_centroids = map(centroid, new_clusters)

        observed_error = max(abs(new - old) for new, old in zip(new_centroids, centroids))
        centroids = new_centroids

    return (centroids, new_clusters)


###
# Main part of program:
# Pick initial centroids
# Iterative to find final centroids
# Print results
##/

initial_centroids = pick_centroids(dataset, k)
final_centroids, final_clusters = iterate_centroids(dataset, initial_centroids)

for centroid, cluster in zip(final_centroids, final_clusters):
    print "Centroid: %s" % centroid
    print "Cluster contents: %r" % cluster
