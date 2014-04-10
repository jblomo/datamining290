name: inverse
layout: true
class: left, top, inverse

---

## Homework

  + Represent each of 2 graphs as both an adjacency matrix and an adjacency list
  + Work on your projects

---

## Graphs

.left-column[
1. <img src="img/Directed_acyclic_graph.png" width=100% />
]
.right-column[
2. .white-background[<img src="img/6n-graf.svg.png" width=100% />]
]

---

## Output

  + File in Github pull request
  + Represent Matrix and list in some sort of organized way

```python
[[0 1 1 1]
[1 0 0 1]
...]

{1: [2,3,4],
2: [1, 4]}
```

```csv
0,1,1,1
1,0,0,1
...

1,2,3,4
2,1,4
```

---

## [NetworkX](http://networkx.github.io/)

  + Python library for manipulating graphs
  + Potentially useful for your projects
  + Not homework

---

## [VirtualEnv](https://pypi.python.org/pypi/virtualenv)

  + Install and manage libraries
  + ```activate``` each time you start a new session
```bash
$ virtualenv venv
$ source venv/bin/activate
$ pip install <python package>
```
