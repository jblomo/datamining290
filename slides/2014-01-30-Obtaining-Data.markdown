name: inverse
layout: true
class: left, top, inverse

---

# Obtaining Data

---

## Ways to Collect

.left-column[

  + Operational Data
  + Data Warehouse
  + Unstructured Data
  + External API
  + Data Sets
]

.right-column[
<img src="img/bottlecaps.jpg" width=100%/>
]

???

image: http://woodwarddesign.ca/blog/2009/03/06/bottle-caps/

---

## Operational Data

  + Most frequent in industry
  + Usually stored in databases best suited for transactional use
  + Challenge is reorganizing data to suit question

???

## Data from production
  + Most frequently you'll have data that is being used by the application,
    and you'll want to find insights in it
  + We'll go into more detail in another class, but online use is
    optimized for small queries and small updates
  + Frequently just accessing the data in bulk is a software engineering
    problem:
    + ensuring long queries don't hold up production usage
    + joining across databases via software
    + understanding esoteric columns, like "flags"
  + Often will want to reorganize data to look like transactional

---

## Example

Find the user names with most "liked" reviews on Yelp

Users

| user_id | name | flags |
|---------|------|-------|
| 25234   | Bob  | 0x200 |

Reviews

| review_id | business_id | user_id | stars | text         | flags |
|-----------|-------------|---------|-------|--------------|-------|
| 282       | 52432       | 25234   |   4   | great place! | 0x1   |

Feedback

| review_id | source_user_id | ufc_flags | flags |
|-----------|----------------|-----------|-------|
| 282       | 8205           | 0x1       | 0x0   |

???

## Distributed Data

  + At Yelp we have a variety of database tables, and those tables can be
    spread across different databases
  + At a minimum we frequently need to ```JOIN``` across tables to answer queries
    + e.g., matching up user names with reviews from separate tables
  + It is possible the review table is only indexed on business_id, and so
    finding all reviews by a user is really disk intensive: make sure you're
    not slowing down the whole site!
  + An additional challenge is when the "feedback" tables are in a separate
    database: can no longer issue normal SQL queries
  + What are these "flag" columns for?
  + Exactly: no one knows. Often must look into code, or compare data to
    production representation to guess meaning. In Yelp, ```0x1``` often means
    "inactive", so we probably don't want to count that feedback

---

## Data Warehouse

.left-column[

  + Data located on same system
  + Organized for analytics queries
  + Requires extra maintenance and understanding of construction
]
.right-column[
  <img src="img/Ikea-Warehouse.jpg" width=100%/>
]
???

## No free lunch

  + A strong data warehouse can be a big improvement over operational data
  + Hopefully, someone has already cleaned, joined data in a way that makes
    sense!
  + Optimized for long running queries: less fear of brining down website!
  + But you must learn how that process was accomplished in order to understand
    potential problems
  + How to handle missing data?
  + We'll go into more detail about how data warehouse schemas compare to
    online ones later in the course

---

## Unstructured

  + Haphazard collection of data
  + Unclear what structure should be
  + Examples: Web logs, text, multimedia
  + Must extract structure eventually

???

## Yelp JSON logs

  + When developing a web application, new context or details become
    important: how long did certain requests take? What link did a user follow
    to a website?
  + Relational Databases aren't well suited for these wide varieties of
    potential attributes that don't apply to all items
  + So the current work around is just to write all useful information down in
    a log, and extract what is needed later
  + Text, like business reviews, another example: desired structure changes
    radically between questions: How many words? Characters? What is the sentiment?
  + Pictures can contain attributes like color depth, length, width
  + First step of data mining is often imposing structure on data: the data is
    not inherently unstructured, it just is unclear what the structure *should be*
    until query time

---

## Search Logs Example

.tight-code[
```
193.139.1 jimmy [10/Oct/2013:13:55:36] "GET /search?q=headache HTTP/1.1" 200 9288
282.482.3 shreyas [10/Oct/2013:13:56:36] "GET /search?q=bananas HTTP/1.1" 200 2929
345.114.1 steven [10/Oct/2013:13:56:37] "GET /search?q=cold HTTP/1.1" 200 8232
10.328.52 anne [10/Oct/2013:13:56:39] "GET /search?q=flu+shot HTTP/1.1" 200 2342
10.328.52 lily [10/Oct/2013:13:57:40] "GET /search?q=i290 HTTP/1.1" 200 2342
```
]

| user_name | date                 | query    |
|-----------|----------------------|----------|
| jimmy     | 10/Oct/2013:13:55:36 | headache |
| shreyas   | 10/Oct/2013:13:56:36 | bananas  |
| steven    | 10/Oct/2013:13:56:37 | cold     |
| anne      | 10/Oct/2013:13:56:39 | flu shot |
| lily      | 10/Oct/2013:13:57:40 | i290     |

???

## Imposing Structure

  + Extract only the rows we know follow a format
  + Format queries from some encoding (e.g., URL) to standardized format

---

## External APIs

  + Better documented than internal data!
  + More limited in amount and detail
  + Commonly HTTP/REST based

???

## Motivation

  + Companies are often searching for other ways to leverage their data
  + Both for immediate business purposes, and for brand recognition
  + Twitter more (in)famous example
  + NYTimes another good option

---

## NYTimes API Example

  + [Article Search API](http://developer.nytimes.com/docs/read/article_search_api_v2)
  + http://api.nytimes.com/svc/search/v2/articlesearch.json?fq=berkeley&begin_date=20140101&end_date=20140131&api-key=d394cd6a13605351d187e3864dfcea30:8:68746734

???

## Accessing these
  + More info on how to access these APIs is in the Web Architecture class,
    but feel free to ask Shreyas or I about how best to access them

---

## Data Sets

  + Download large, curated set of data all at once
  + Formats vary, but usually documented
  + Can be useful to combine with other datasets or APIs

<img src="img/kaggle-digits.png" width=80%/>

???

## Research

  + Data sets commonly used in research: can compare different techniques on
    same data to understand advantages
  + Sizes can range to a few MB to GB
  + JSON, CSV, XML all potential formats. Cleaning, organization for your
    question again becomes an important aspect

---

## Data Set Examples

.left-column[

  + [MovieLens Data Sets](http://www.grouplens.org/node/73)
  + [Kaggle Digit Recognizer](https://www.kaggle.com/c/digit-recognizer)
  + [Hilary Mason's Data Sets](https://bitly.com/bundles/hmason/1)
]
.right-column[
<img src="img/video.jpg" width=100%/>
]

---

## Exploring Data

  + Data sets are frequently too large to fit in standard tools like Excel
    or Word
  + Simplest to explore on the command line
  + Homework will be exploring a data set of your choice

???

## Size

  + Some formats will not be easily parsed into Excel: e.g., JSON, XML
  + Word will be slow, or unworkable for GB size data
  + CLI provides many composable tools for text manipulation

---

## Yelp Academic Dataset

  + [Yelp Dataset Challenge](http://www.yelp.com/dataset_challenge/) data covers reviews, users,
    businesses, and check-ins
  + To download, you'll need to sign up, but it's instant
  + Use .edu email

???

## Example

  + We'll use this as an example, you can use any data set of your choice
  + Just for homework, don't need to use for project

---

## CLI introduction

  + Standard commands available in [Learn CLI the hard way](http://cli.learncodethehardway.com)
  + All example will be run on ```ischool.berkeley.edu```
  + Shreyas and I are available for more help

???

## Help

  + If you're new, don't be intimidated.
  + Security policies ensure you can't break anything besides your own files
  + Keep backups of important stuff anyway

---

## ```wget```

  + Used for downloading files
  + Downloading with the browser is fine, but sometimes nice to use a faster
    connection, or download it directly to the machine you're working on
.tight-code[
```bash
$ wget 'http://www.grouplens.org/system/files/ml-100k.zip'
```
]

???

## Command

  + Just ```wget "URL"```
  + I like to use quotes in case there are special characters in the URL, eg
    ```?```
  + Will download to current directory with the same name as the remote file

---

## ```scp```

  + Copy a file to or from a remote machine
  + Uses same connection as SSH, but copies data instead
  + Example: Copy data you've downloaded in your browser

.tight-code[
```bash
$ scp ~/Downloads/ml-100k.zip jretz@ischool.berkeley.edu:
```
]

OR

.tight-code[
```
$ scp ~/Downloads/ml-100k.zip \
jretz@ischool.berkeley.edu:i290/movielens-100k.zip
```
]

???

## Command

  + Trailing ```:``` is important: signifies remote machine
  + If you don't specify path or filename, will copy the file with the same
    name into your home directory

---

## ```gunzip``` / ```unzip```

  + Uncompress data sets for simpler, faster manipulation
  ```
  $ unzip ml-100k.zip
  ```

  OR

  ```
  $ gunzip dataset.json.gz
  ```

???

## Commands

### unzip
  expand potentially many files, leave original alone

### gunzip
  expand original file, leaving only the uncompressed version

---

## ```less```

  + View a file
  + History: original command was called ```more``` to see a file a page at a time
  + "Less is more"
  ```bash
  less yelp_academic_dataset_user.json
  ```

---

## Searching in ```less```

  + ```/``` (forward slash) lets you input search text, ```<Enter>``` performs the search
  + After finding the first occurrence, ```/<Enter>``` will find the next occurrence
  + ```?<Enter>``` will find the previous occurrence
  + ```q``` will quit
```
/"name"": "Bob"
/"name"": "Cindy"
```

???

## Command

  + Useful for finding specific instances to investigate

---

## ```grep```

  + Find and print lines matching a "regular expression"
  + [Regular expressions](http://www.regular-expressions.info/quickstart.html)
    are "find" on steroids, but you can use simple strings

.tight-code[
```bash
$ grep '"name": "Cindy"' yelp_academic_dataset_user.json
```
]

---

## ```wc```

  + "wordcount" counts characters, words, lines
  + Most useful in data sets for lines: ```-l```
```bash
$ wc -l yelp_academic_dataset_user.json
43873 yelp_academic_dataset_user.json
```

---

## Composability

  + Genius of Unix: do one thing well, compose commands to get what you want
  + ```|``` pipe characters "sends" output of one program to the input of another
  + How many people named Cindy in the dataset?

.tight-code[
```bash
$ grep '"name": "Cindy"' yelp_academic_dataset_user.json | wc -l
91
```
]

+ What are the most common names in the dataset?

.tight-code[
```bash
$ egrep -o '"name": "([^"]*)"' yelp_academic_dataset_user.json | \
  sort | uniq -c | sort -nr | head
465 "name": "David"
447 "name": "John"
418 "name": "Michael"
417 "name": "Chris"
383 "name": "Mike"
365 "name": "Jennifer"
298 "name": "Brian"
267 "name": "Scott"
265 "name": "Jason"
261 "name": "Mark"
```
]
