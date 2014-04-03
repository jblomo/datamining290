name: inverse
layout: true
class: left, top, inverse

---

# Frequent Patterns

---

## Finding Patterns

  + Cookies frequently purchased with milk
  + Website sign-ups frequently occurring after reading FAQ
  + DNA sections frequently seen with a drug reaction

???

## Patterns

  + set of items
  + subsequences of actions
  + substructures
  + Generalized to any kind of pattern that occurs "frequently" in the dataset

---

## Market Basket

  + What things are frequently purchased together?
  + Apocryphal example: beer and diapers
  + Can be used for any natural grouping

???

## Details

  + Example of how patterns are discovered is to look at groups of actions
  + One natural group is the shopping basket: what items are in it?
  + But can also be applied to anytime there is a natural grouping
    + Eg. web session logs group naturally around a person and time window

---

## Define "Frequently"

  + Action
    + ```A``` and ```B```
  + Support
    + probability that a transaction contains ```A ∪ B```
  + Confidence
    + conditional probability that a transaction having ```A``` also
    contains ```B```

???

## Probabilities

  + We have two actions ```A``` and ```B```
  + Out of all the groupings, how many had both items?
  + Out of all the groupings with ```A```, how many had ```B```?

---

## Minimums

  + Min Support
    + lower bound on support probability
  + Min Confidence
    + lower bound on confidence probability
  + Strong
    + Rule that satisfies both minimums

<img src="img/strawberry-milk.jpg" width=70% />

???

## "Frequently"

  + Now we can talk about what frequently means
  + It doesn't matter if two very unpopular items were purchased together: car
    battery and smoke detector
  + Also don't care if ```A``` happens a lot: everybody buys milk, so not a big
    deal if some bought milk and strawberries
  + Also important to note confidence is not symmetric: buying strawberries may be
    frequent with buying milk, but not vice versa

---

## Too Many Rules

  + Patterns not limited to 2 events
  + But looking for all patterns leads to combinatorial number of options

a,b,c,d,e <br/>
<br/>
a,b <br/>
a,c <br/>
... <br/>
<br/>
a,b,c <br/>
a,b,d <br/>
... <br/>

---

## Subset Patterns

  + Max-Pattern
    + ```X``` rule is frequent and there exists no frequent
    super-pattern ```Y```
  + Closed
    + ```X``` rule is frequent and there exists no super-pattern ```Y``` *with the same support*
  + Shortcut
    + Find only max-pattern or closed patterns, let other patterns be
    subsets

???

## Shortcut

  + So how can we calculate all the potentially frequently occurring patterns?
  + We can find either the max or closed pattern that encompasses all of the
    patterns we're looking for
  + These are more easily tracked, and we can still derive all of the
    frequently occurring sub-patterns
  + We can use the reverse: if a rule or item is not frequent enough alone, its
    super-set will not be frequent enough:
    + If ```A``` is does not meet min support, there's no way for ```A,B``` to make
      support

---

## Apriori

  1. Find supported single event rules
  1. Combine to make 2-event rules, check DB for support
  1. Combine to make 3-event rules, check DB...
  1. Stop when no N-event rules

---

<img src="img/apriori.png" width=100% />

???

## Speed

  + Isn't that slow? Yes!
  + Book has some techniques to speed it up, mostly around grouping
  + Can group together sets and if the group does not meet the support
    threshold, then none of the members do

---

## Interesting Patterns

  + Strong rules may not always be interesting rules
  + Basketball → eat cereal [40%, 66.7%] is strong
  + But "not cereal" has a bigger effect on if you play basketball

|            | Basketball | Not basketball | Sum  |
|------------|------------|----------------|------|
| Cereal     |       2000 |           1750 | 3750 |
| Not cereal |       1000 |            250 | 1250 |
| Sum        |       3000 |           2000 | 5000 |

???

## Details

  + Not cereal row: has a huge effect on if someone plays basketball
  + cereal + basketball... sure it happens frequently, but you'd actually
    expect to see a bigger effect

---

## Lift

  + ```P(A ∪ B) / P(A)*P(B)```
  + If ```A``` and ```B``` independent, what is likelihood of ```A``` and ```B```?

???

## Correlation

  + 1
  + so if lift > 1, you're seeing something that is happening more often than
    random
  + < 1 means they negatively correlated
  + χ², cosine, others in book

---

# *Break*
