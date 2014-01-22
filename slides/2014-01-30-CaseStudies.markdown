name: inverse
layout: true
class: left, top, inverse

---

## Questions
  + Differences from [CS 294 Behavioral Data Mining](http://bid.berkeley.edu/cs294-1-spring13/index.php/Main_Page)
  + Course Load
  + Readings: after lecture

???

## Memory :notes:
  + Spaced intervals makes memorizing easiest

---

## Case Studies

---

## Process

### [Knowledge Discovery in Databases (KDD)](http://en.wikipedia.org/wiki/Data_mining#Process)
  + Selection
  + Pre-processing
  + Transformation
  + Data Mining
  + Interpretation/Evaluation

### [Cross Industry Standard Process for Data Mining](http://en.wikipedia.org/wiki/Cross_Industry_Standard_Process_for_Data_Mining)
  + Business Understanding
  + Data Understanding
  + Data Preparation
  + Modeling
  + Evaluation
  + Deployment

???

## Data to Knowledge

  + We learned last week that the goal of data mining is to turn raw data into
    knowledge

---

## Search Engine Logs

```log
193.139.1 jimmy [10/Oct/2013:13:55:36 -0700] "GET /search?query=headache HTTP/1.1" 200 9288
282.482.3 shreyas [10/Oct/2013:13:56:36 -0700] "GET /search?query=bananas HTTP/1.1" 200 2929
345.114.1 steven [10/Oct/2013:13:56:37 -0700] "GET /search?query=cold HTTP/1.1" 200 8232
10.328.52 anne [10/Oct/2013:13:56:39 -0700] "GET /search?query=flu+shot HTTP/1.1" 200 2342
10.328.52 lily [10/Oct/2013:13:57:40 -0700] "GET /search?query=i290 HTTP/1.1" 200 2342
```

What is a common theme in these queries?

???

## Raw Data
  + raw data comes in many forms
  + often we'll use tech examples: e.g., search engine logs
  + these have information like user, IP, date-time, HTTP version, query
  + can we extract actionable information from it?

---

## Flu Trends
.left-column[

  + Use dates to plot trends over time
  + Use IPs to show activity per state or city
  + Other ideas?
]

.right-column[
![Flu Trends](file:img/flu-trends.png)
]

???

## Other ideas

  + What other information could you extract from log data?
  + Spread of flu over countries, cities?
  + Time of day? Do people notice in the morning?
  + correlated with any other activity? (e.g., travel)
  + best day of the week to call in sick (and get away with it)?

---

## Asking Questions

  + Many potential discoveries within search logs
  + Asking meaningful questions is a difficult but essential part of data
    mining
  + Algorithms can answer questions for you, but it can't ask them

???

## No magic

  + Data mining is not a magical machine into which one throws data and gets
    out interesting facts
  + Data + question + algorithm suited for question => potential insights

---

## Data Mining Process

  + Data cleaning
  + Data integration
  + Data selection
  + Data transformation
  + Data mining*
  + Pattern evaluation
  + Knowledge presentation

???

## We cover the full process

### Cleaning
  remove abuse requests, "Estimates for Connecticut for weeks
  2012-12-16 to 2013-01-06 were affected by a software glitch"

### Integration
  Collecting logs from different data centers, maybe from
  different formats (over the years)

### Selection
  IPs, dates, queries

### Transformation
  IP to location. Dates to local time.

### Mining
  what words are associated with the flu? cold? fever? other
  languages?

### Evaluation
  This year worse than last, peaking later.

### Presentation
  plotting, cartograms

---

## Data Preparation

  + Collecting, cleaning, integrating takes > 50% of the time in real world
    situations
  + Explains difficulty in finding good candidates for Data Scientist roles

???

## Data Scientist

  + In industry, most companies are hiring engineers to interact with the full
    stack, so that they can collect data
  + If preparation is > 50% and they hire you just for algorithms, they need to
    hire > 1 other person just to support you
  + How many of you like just preparing data?

---

## Transactional Data

  + Discrete history of events, containing some minimum amount of data:
  + Subject: Who initiated action?
  + Verb: What was done?
  + Object: What was it done to?
  + Timestamp: When?

???

## Storage

  + Most common example is purchase history
  + Subject: user ID, or name
  + Verb: In logs, can vary. In databases, you'll have a purchases table, so
    verb is assumed to be "purchased"
  + Object: product IDs (or in web logs, web pages)
  + Timestamp: Make sure you account for timezones
  + Other Data: previous page, extra info about action (purchase with CC?
    Cash?)

---

## Other Data

  + Often does not contain timestamps
  + Spatial Data
  + Multimedia

![Moonlight Sonata](file:img/moonlight_sonata.jpg)

???

## Data

  + Maps in general can be used to find interesting information: where are
    cities typically located? What are properties of well planned cities?
  + Videos have a time component, but are not transactional.
  + Music can be seen non-linearly and analyzed
  + image: http://flyingpudding.com/projects/viz_music/

---

## Purpose of Data Mining

Purpose

  + Obtaining *actionable knowledge*

Descriptive

  + Explains data already seen

Predictive

  + Immediately understand new data

???

## Tasks
  + At Amazon, dashboards for different countries
  + Americans shopped at work; Germans shopped early morning, early evening; Japanese shopped late at night
  + Can help with capacity planning, ideas for discounts, warehouse staffing
  + Predictive: at Yelp, what business are you most likely to want to review
    next? As you have activity, instantly understand what is the best
    recommendation

---

## Types of Models

  + Classifiers
  + Regressions
  + Clustering
  + Outlier

???

## Details

Classifiers

  + describes and distinguishes cases. Yelp may want to find a
    category for a business based on the reviews and business description

Regressions

  + Predict a continuous value. e.g., predict a home's selling
    price given sq footage, # of bedrooms

Clustering

  + find "natural" groups of data *without labels*

Outlier

  + find anomalous transactions, e.g., finding fraud for credit cards

---

## Tip of the Iceberg

  + Thousands of ways to calculate a model
  + Combinatorially more ways to combine them
  + In technique, large amount of overlap between purpose

<img src="file:img/iceberg11.jpg" width=90%/>

???

## Survey

  + Machine Learning and Data Mining fields churn these models out
  + Newest methods combine multiple models (boosting & bagging)
  + We're going to cover these in much greater detail in the course

---

## Your own examples

  + Classifiers
  + Regressions
  + Clustering
  + Outlier

???

## Examples

Classifiers

  + Newly opened business

Regressions

  + Revenue estimates for a franchise store

Clustering

  + Movie genres

Outlier

  + Bot vs human web traffic

---

## Machine Learning

Supervised

  + Given data with a label, predict data without a
  label

Unsupervised

  + Given data without labels, group "similar" items
  together

Semi-supervised

  + Mix of the above: e.g., unsupervised to find groups,
  supervised to label and distinguish borderline cases

Active

  + Starting with unlabeled data, select the most helpful cases
  for a human to label

---

## Matching

  + Categories for businesses, where some business have correct labels, but not sure how precise categories should be
  + Comparing search results algorithms: some queries return the same results, some return very different businesses
  + Spam filter with existing corpus
  + Demographic information about customers

???

## Details

   + Matching with the type of learning

---

## *Break*
