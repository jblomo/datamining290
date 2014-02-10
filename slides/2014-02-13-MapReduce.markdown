name: inverse
layout: true
class: left, top, inverse

---

# MapReduce


???

## Spoilers

  + Don't look ahead in the slides
  + If you know MapReduce, try to let others answer and genuinely think about
    how *you* would solve the problem.

---

# Yelp has a problem

  + 250+ GB of logs per day
  + Each GB takes 10 minutes to process
  + How long to handle a day's logs?
<img src="img/yelp-growth.png"/>

???

## Too long

  + On a single machine 40+ hours!
  + If we really had only a single machine, we wouldn't be able to keep up!
  + Mistake can't be fixed in a day (billing especially important)

---

# Solution? animate:

  + Don't use one machine!
  + What are the new challenges?
  + Distributing data
  + Calculating overall statistics
  + Failures

???

## New Challenges

  + With many machines, how to they get access to the 100 GB of logs?
  + How do they coordinate who gets which section of logs?
  + How do we calculate the average?
  + What happens when one of the boxes dies?
    + Detecting failure (timeout waiting for data? Out of band?)
    + Decide who takes over the data

---

# Do It Yourself two_col:

  + There are many ways to deal with these challenges
  + Often, people would "roll" their own solutions depending on the problem
  + Google implemented a generic solution, shared idea
<img src="img/mapreduce-paper.png"/>

???

## Dependencies

  + Did you have a super-computer?
  + What programming language were you using?
  + Type of problem being solved (working on graphs, or web logs, ...)

---

# Big Idea

  + Simplify, limit solution expression
  + Enable sophisticated implementation


  + Interface: Map() Reduce()
  + Implementation: Reliably run over 1000s of machines

???

## Really Big Idea

  + Limiting yourself to what can be expressed may seem like a loss
  + But it enables the implementation to handle the problems we talked about
  + And then can be used as understandable building blocks

---

# MapReduce

  + Map: Extract a property to summarize over
  + Reduce: Summarize all items with a particular property


  + Simple: Each operation stateless

???

## Reading

  + Reading this week includes a video explaining MapReduce much more generally
  + This lecture will focus on it from a practical standpoint for homework
  + MapReduce's main benefits are for running over many machines, fault
    tolerance
  + But we'll just practice on one machine

---

## Example

  + Web application logs
  + How many actions have we seen?
    + Business views
    + User profile views
    + Searches

???

### Details

  + Business Views: Triple Rock, Bear Raman
  + User profile: jimmyblomo.yelp.com
  + Searches: query, location

---

## Logs

```json
{'page_type': 'search',
'user': 'jimmy', 'query': ...}

{'page_type': 'biz_view',
'user': 'shreyas', 'biz_id': 55}

{'page_type': 'user_profile',
'user': null, 'profile_id: 123}

...
```

???

### Logs

    + JSON logs, various types of information
    + entire record on one line (wrapped for slides)

---

## Map

  + Input: Key, Value
  + Output: Keys, Values

---

## Map Example

  + Input Key: Log line number
  + Input Value: Log line text
  + Output Key: Action
  + Output Value: times this action has occurred *on this line*

???

### Counts

  + Log line number is not helpful in our specific case
  + Log line text: we hope it is machine readable so we can accurately extract
    the action
  + It has datetime, cookie, action, etc.
  + How many times has this action occurred? 1
  + Tunnel vision: all we care about is this line

---

## Actions?

```text
search       1
biz_view     1
user_profile 1
search       1
biz_view     1
search       1
biz_view     1
user_profile 1
search       1
```

???

### Middle Step

  + From log lines, we've extracted the information out that we care about
  + The counts and the actions
  + Next step summarize
  + Next step after Map?

---

## Reduce

  + Input: Key, Values
  + Output: Keys, Values

???

### Values

  + Note: The input is values! Plural
  + Because we get a key and all of its associated values
  + Remind me: what are we trying to get out of this computation?
  + So what do you think the output keys are?
  + Values?

---

## Reduce Example

  + Input Key: Action
  + Input Values: Counts: ```[1,1,1,1]```
  + Output Key: Action
  + Output Value: Total Count

???

### Details

  + Action is *one of* search biz_view profile_view
  + To get total count, sum all of the counts

---

## Example Output

  + Output Key: Action
  + Output Value: Total Count
```html
"search"       4
"user_profile" 2
"biz_view"     3
```

---

# Point?

  + A lot of work for counting!
  + More complex calculations can be done this way, eg. PageRank
  + Stateless constraint means it can be used across thousands of computers

???

## Details

  + By only looking at keys and values, can optimize a lot of back-end work
  + Where to send the results?
  + What to do when a computer fails? (Just restart failed part)

---

## Implementation

```text
biz_view     1
user_profile 1
search       1
search       1
biz_view     1
search       1
biz_view     1
user_profile 1
search       1
```

???

## Intermediate

  + This was the situation after map
  + Keys all jumbled
  + What Hadoop does is sort them and distribute them to computers

---

## "Shuffle"

```text
biz_view     1
biz_view     1
biz_view     1
search       1
search       1
search       1
search       1
user_profile 1
user_profile 1
```

???

## Distribute

  + Now it is easy to distribute, and can handle all the ```biz_view``` at once

---

## Inputs

  + MapReduce distributes computing power by distributing input
  + Input is distributed by splitting on lines (records)
  + You cannot depend on lines being "together" in MapReduce

???

### Splitting Files

  + Image you have a lot of large log files, GB each
  + You'd like to let different machines work on the same file
  + Split file down the middle, well, at least on a newline
  + Enable two separate machines to work on the parts
  + You don't know what line came before this one
  + You don't know if you will process the next line
  + Only view is this line
  + Real life slightly more complicated, but mostly hacks around this

---

# Word Count

```json
{"text": "Greatest pizza ever", "stars": 2, "user": ...}

{"text": "good pizza selection", "stars": 5, "user": ...}
```
  + Total uses of a word in across all reviews

???

## Classic

  + This is the traditional MapReduce example, so let's solve it
  + No skipping ahead

---

# Steps animate:

  + Map
  + Extract ```text```
  + Count words in that review
  + Key: word , Value: count
  + Reduce
  + Key: word , Values: all counts
  + sum(values)

???

## Hints

  + What's the first step (of MapReduce)
  + What part of the record are we interested in?
  + What do we want with those words?
  + Mapper: Key Value? What are we grouping by?
  + Next step (of MapReduce)
  + What are the reducer inputs
  + with all of these counts, how do we summarize

---

## Examples animate:

  + "Greatest pizza ever"
  + Counts
    + Greatest: 1
    + pizza: 1
    + ever: 1
  + Reducer, Key: pizza
    + Values: [1, 1]
    + Output: ["pizza", 2]

---

# Multi-Step

  + Not all computations can be done in a single MapReduce step
  + Map Input: <key, value>
  + Reducer Output: <key, value>
  + Compose MapReduce steps!

???

## Output as Input

  + The output of one MapReduce job can be used as the input to another

---

## Examples

  + PageRank: Multiple steps till solution converges
  + Multi-level summaries

???

## PageRank

  + PageRank is an algorithm for calculating the important of a page
  + But it depends on the importance of every page pointing to it!
  + So iteratively calculate the important of all pages
  + Find average presidential donations by candidate, then normalize averages

---

# Unique Review animate:

  + Review ID with the most unique words
  + Map Input: <line number, text>
  + Map Output: <word, review\_id>
  + Reducer Input: <word, [review\_ids]>
  + Reducer Output: <review\_id, 1> if the word is unique

???

## Questions

  + For our purposes, what is always the mapper input?
  + What feature do we want to calculate first?
  + Given this mapper output, what *must* the reducer input be?
  + What property about a review are we interested in?

---

## Step 2: Count Unique Words animate:

  + Map Input: <review\_id, 1>
  + Map Output: <review\_id, 1>
  + Reducer Input: <review\_id, [1,1,...]>
  + Reducer Output: <review\_id, sum>

???

## Questions

  + Given the reducer output, what *must* the mapper input be (for chained
    MapReduce steps)
  + What do we want to group by?
  + Given this mapper output, what *must* the reducer input be?
  + What are we calculating?

---

## Step 3: Max animate:

  + Map Input: <review\_id, sum>
  + Map Output: <"MAX", [sum, review\_id]>
  + Reducer Input: <"MAX", [[sum, review\_id],...]>
  + Reducer Output: <review\_id, sum> of the max(sum)

???

## Questions

  + Given the reducer output, what *must* the mapper input be (for chained
    MapReduce steps)
  + We're calculating a statistic over what portion of the data set?
  + What stat are we calculating?




---

Slide 1
  main
  notes
Slide 2
  main
    does image fit? is it OK on a dark background?
  notes
next slide is animated
Slide 3
  main
  notes
next slide is two column
Slide 4
  main
    does image fit? is it OK on a dark background?
  notes
Slide 5
  main
  notes
Slide 6
  main
    a series of sections will work better for some definitions
    a series of sections will work better for some definitions
  notes
Slide 7
  main
  notes
    a series of sections will work better for some definitions
    a series of sections will work better for some definitions
    a series of sections will work better for some definitions
Slide 8
  main
  notes
Slide 9
  main
    a series of sections will work better for some definitions
    a series of sections will work better for some definitions
Slide 10
  main
    a series of sections will work better for some definitions
    a series of sections will work better for some definitions
    a series of sections will work better for some definitions
    a series of sections will work better for some definitions
  notes
Slide 11
  main
  notes
Slide 12
  main
    a series of sections will work better for some definitions
    a series of sections will work better for some definitions
  notes
Slide 13
  main
    a series of sections will work better for some definitions
    a series of sections will work better for some definitions
    a series of sections will work better for some definitions
    a series of sections will work better for some definitions
  notes
Slide 14
  main
    a series of sections will work better for some definitions
    a series of sections will work better for some definitions
Slide 15
  main
  notes
Slide 16
  main
  notes
Slide 17
  main
  notes
Slide 18
  main
  notes
Slide 19
  main
  notes
next slide is animated
Slide 20
  main
  notes
next slide is animated
Slide 21
  main
Slide 22
  main
  notes
Slide 23
  main
  notes
next slide is animated
Slide 24
  main
  notes
next slide is animated
Slide 25
  main
  notes
next slide is animated
Slide 26
  main
  notes
Headings are the right level?
