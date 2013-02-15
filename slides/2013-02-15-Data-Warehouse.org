* Data Warehouse :slide:

* Database Types :slide:
  + Data Warehouse :: Database designed for using data to make decisions
  + OLAP :: OnLine Analytical Processing
  + OLTP :: OnLine Transactional Processing
** Data Mining :notes:
   + These databases are often the starting point for data mining in companies
   + Most of the data sets from companies typical come from exporting some
     portion of their data warehouse

* Properties :slide:
  + Subject Oriented :: Focus on core business objects
  + Integrated :: Access to as much data as possible
  + Time Variant :: Contains historical data with time parameter
  + Non-volatile :: Updated (relatively) infrequently, in bulk
** Examples :notes:
   + Yelp users can be directed to a datacenter depending on conditions. This
     data probably doesn't need to be in the DW
   + Yelp has severl databases: log summaries, user info, salesforce. Most
     useful if they are all in the same place
   + Operationally, when someone changes their address, we just overwrite it in
     the OLTP DB. But DW potentially cares about the old value
   + OLTP writes to rows every time someone updates profile, review, etc. Lots of
     simultaneous updates. DW: typically once a day, in bulk

* OLAP or OLTP? :slide:animate:
  + Transactional Focus vs. Analytic Focus
  + Used by Managers, Executives vs. DBAs, programmers
  + Contains current information vs. Historical
  + Variety of differently summarized data vs normalized
  + Short transactions vs. Long queries
  + Full table scans vs. Indexes on for fast lookups
  + Simultaneous queries: 100s-1000s vs 1-100
  + Simple updates vs Complex queries
  + Guarenteed high performance vs Flexibility & Customization

* Overview :slide:
  [[file:img/olap-overview.png]]
** From the front :notes:
   + Analytics team uses charts, reports, et
   + Generated from an OLAP server
   + Which uses data from a data warehouse (often DW and OLAP server are
     integrated)
   + Uses a process (ETL) to move the data from other source into DW

* Types of Data Warehouses :slide:
  + Enterprise :: turnkey solution, often expensive, sophisticated but complex
    ingestion, integration, security features
  + Data Mart :: Smaller, limited in scope. Designed for specific team or
    department
  + Virtual :: OLAP built on top of an OLTP database
  + Cloud :: Google BigQuery, Amazon RedShift
** Vendors :notes:
   + Enterprise :: Oracle, Greenplum, AsterData
   + Data Mart :: MySQL, PostgreSQL
   + Virtual :: MySQL, PostgreSQL views or admin interface

* Metadata :slide:
  + Data about the data being stored
  + Overview: schema, languages
  + Operational: last update, query latency
  + Algorithms: normalization, transformation
  + Performance: job dependencies
  + Business: ownership, permissions
** Considerations :notes:
   + As soon as several people start using the DW, they'll need to know about
     how it is put together
   + Metadata often comes as an after thought but is an important part of
     scaling

* Overview :slide:
  [[file:img/olap-overview.png]]
** Data Cubes :notes:
   + Why are there cubes in the OLAP area?

* Datacube :slide:two_col:
  + Way of thinking about multi dimensional data
  + Useful metaphor because one can reason about ways to satisfy a query
  [[file:img/BorgFirstContact.jpg]]

* Dimensions :slide:
 |          | Day 1 | Day 2 | Day 3 | 
 | Region 1 | $200  | $80   | $600  | 
 | Region 2 | $300  | $90   | $650  | 
 | Region 2 | $400  | $100  | $700  | 
** Data... Square :notes:
   + More of a data square: only 2 dimensions
   + Advertising on Yelp
   + Now we want to know Product TYpe of things sold (CPC, CPM, National)

** Cube: 3rd Dimension :slide:
[[file:img/cube-3d.gif]]
*** More :notes:
   + Now we want to know Page Type (Business, Search, Home)
   + Hard to draw 4 dimensions, so instead...

** Multi-Cube :slide:
[[file:img/cube-4d.png]]
*** More :notes:
   + Keep adding dimension as necessary

** Lattice :slide:
   [[file:img/cube-lattice.jpg]]
*** Moving :notes:
   + Move back and forth from our 2d table
   + To our 3d cube, to our 4d multi-cube
   + The lower dimensions summarize table
   + At the extreme is just the total (ie all money made)

* Schemas :slide:two_col:
  + Data cube a way of visualizing multi dimensional data
  + Star schema is a way store the data in a database
  [[file:img/sun.jpg]]

** Fact table :slide:
  [[file:img/star-1.png]]

** Dimension table :slide:
  [[file:img/star-2.png]]

** Dimension tables :slide:
  [[file:img/star-3.png]]

** Dimension tables :slide:
  [[file:img/star-4.png]]

** Dimension tables :slide:
  [[file:img/star-5.png]]

** Star Schema :slide:
  [[file:img/star-schema.jpg]]

** Dimensions of Dimensions :slide:
  [[file:img/star-6.png]]

** Dimensions of Dimensions :slide:
  [[file:img/star-7.png]]

** Dimensions of Dimensions :slide:
  [[file:img/star-8.png]]

** Dimensions of Dimensions :slide:
  [[file:img/star-9.png]]
*** Schema Name? :notes:
   + Any guesses what this fractal looking schema is called?

** Snowflake Schema :slide:
   + Schema with radiating dimension tables
  [[file:img/star-snowflake.jpg]]

** Constellation Schema :slide:
   + Schema with several fact tables and related dimensions
  [[file:img/star-constilation.jpg]]

* Data Warehouse Operations :slide:
  + Rollup :: Summarize data along fewer dimensions
  + Drill-down :: Get details within a particular dimension
  + Slice :: Select a particular value in a dimension
  + Dice :: Consider a subset of the values in a dimension
  + Pivot :: Swap, or rotate dimensions
** Examples :notes:
   + Rollup :: What countries are selling the most ads?
   + Drill-down :: Spike in Q1 ad views. Which month most responsible?
   + Slice :: Chart sales only for CPC
   + Dice :: Only look at sales in US, IT, DE
   + Pivot :: Swap axis on a chart

* Materialized Views :slide:
  + View :: virtual table defined by a query
  + Full :: Pre-compute and store
  + None :: Calculate summaries on the fly
  + Partial :: Variety of strategies: eg. cache results after calculating
** Usefulness :notes:
   + In DW, often storing different cubes in the lattice
   + For the country sample, do we have those summaries stored in another DB
     table? On disk?  By month? Year?
   + Storing all possible summarize expensive when loading data, and requires a
     lot more storage

* Architecture :slide:
  + ROLAP :: Relational. Implement OLAP on top of a relational database
  + MOLAP :: Multidimensional. Implements data cube as storage paradigm
  + HOLAP :: Hybrid. Data in ROLAP, rollups in MOLAP
  + Specialized :: Often distributed storage, parallel DB technology
  + NoSQL :: Store data as key-value pairs, optimized in different ways
** Details :notes:
   + ROLAP :: MySQL, PostgreSQL
   + MOLAP :: Oracle, Palo
   + HOLAP :: MS SQL
   + Specialized: AsterData, Greenplumb
   + NoSQL: Hive, BigTable, Cassandra

* *Break* :slide:

#+STYLE: <link rel="stylesheet" type="text/css" href="production/common.css" />
#+STYLE: <link rel="stylesheet" type="text/css" href="production/screen.css" media="screen" />
#+STYLE: <link rel="stylesheet" type="text/css" href="production/projection.css" media="projection" />
#+STYLE: <link rel="stylesheet" type="text/css" href="production/color-blue.css" media="projection" />
#+STYLE: <link rel="stylesheet" type="text/css" href="production/presenter.css" media="presenter" />
#+STYLE: <link href='http://fonts.googleapis.com/css?family=Lobster+Two:700|Yanone+Kaffeesatz:700|Open+Sans' rel='stylesheet' type='text/css'>

#+BEGIN_HTML
<script type="text/javascript" src="production/org-html-slideshow.js"></script>
#+END_HTML

# Local Variables:
# org-export-html-style-include-default: nil
# org-export-html-style-include-scripts: nil
# buffer-file-coding-system: utf-8-unix
# End:
