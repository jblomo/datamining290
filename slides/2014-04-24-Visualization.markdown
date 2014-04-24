name: inverse
layout: true
class: left, top, inverse

---

# Visualization in Data Mining

---

# Your Brain two_col:

  + Pattern detector
  + Visualizations help you search for possible models
  + Help intuitively understand the data
  <img src="img/memory-recall.png"/>

???

## Visual

  + Most people, vision is the strongest sense
  + Recall improves 55% (10%=>65%) with addition of a picture
  + We've talked about the need to understand the data before using
    algorithms on it. Visualization can speed that process up.

---

# Patterns

  + Use visualizations that surface patterns and relationships
  + Know the context for the visualization
  + Verify results

???

## Steps

  + For gaining intuition, focus on simple visualizations that help you see
    relationships in the data.
  + At this time, labels, titles, etc. not very important. Multiple dimension
    in multiple windows? Fine!
  + We'll discuss, but the context a visualization is going to be used in
    matters a lot. Don't feel like you have to import every cool infographic
    into your project
  + Clustering, classification, outlier selection can be verified visually, eg.
    highlighting points.  Use it to gut check conclusions, even if you have to
    drastically reduce dimensionality

---

# Scatter

  + Great for multidimensional data
  + Just plot > 2 dimensions in different plots
  + Reveals correlation, clustering, distribution, ...

???

## Data Mining

  + DM bread and butter. Often deal with high dimensionality, so scatter is one
    of the best ways to visualize
  + Wide variety of patterns can be searched

---

## Multiple Dimensions center:

  <img src="img/vp-sample.png"/>

???

## vp

  + This data is for body positions over time
  + Dimensions are the different angles for different body parts, like hip
    ankle, knee, over time
  + We can see some strong patterns. Maybe we'll need to kernelize them to
    make them learnable, but we have a good understanding that there are, or
    are not relationships between the data

---

# Geographic

  <img src="img/cancer-county.jpg"/>

???

## Trade-offs

  + Coordinates intuitively understandable
  + Lots of ways to bucket/aggregate
  + Dependence on geographical area (eg. when you'd like to depend
    on human impact instead)

---

# Other Chart Types

  + Box plot: aggregate data
  + Bar charts: simple summaries
  + Pie charts: compound proportions

???

## Types

  + Box plots, for real data, still carry a lot of data
  + Bar charts nice for summarizing, not great for exploring
  + Same for pie charts. Pie charts are mostly bad, but can use in particular
    circumstances

---

# Aesthetics

  + The visual aesthetics you use should be tied to the data
  <img src="img/graphics-aesthetics.png"/>

???

## Aesthetics

  + What are some of the techniques we can use to tie data to a visual
    representation?
  + img: Kevin Lynagh, http://keminglabs.com/talks/

---

## Larger Value?

  + Position
  + Length / Angle
  + Area / Volume
  + Color: Chroma Luminance

???

## Slide Switch

  + Hadley Wickham slides, OSCON

---

# Color: HCL two_col:

  + Hue: color type, relative to RGBY
  + Chroma: colorfulness, perceived color intensity
  + Luminosity: brightness, light-dark
  <img src="img/Munsell.png"/>

???

## Color Spaces

  + Many other color spaces, probably most familiar with RGB
  + HCL is useful because it separates the properties of a color into ones
    that can be mapped to data
  + Hue: nominal, can't compare
  + Chroma, Luminosity: numerical / comparable value
  + Chroma vs Saturation: chroma *perception* relative to white, saturation
    measure of color intensity
    + http://rourkevisualart.com/wordpress/2008/02/22/the-difference-between-chroma-and-saturation/

---

## ColorBrewer

  + http://colorbrewer2.org/
  + Type of comparison => type of color difference
  + Lots of other practical features

---

# Careful

  + Some aesthetics can combine to form illusions
  + http://www.michaelbach.de/ot/sze_sineIllusion/

???

## Line Lengths

  + Line lengths can appear to look smaller when extended instead of right
    next to each other

---

## Careful

<iframe width="560" height="315" src="http://www.youtube.com/embed/FWSxSQsspiQ" frameborder="0" allowfullscreen></iframe>

---

## Careful

<iframe src="http://player.vimeo.com/video/18074674" width="500" height="500" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe> <p><a href="http://vimeo.com/18074674">Motion silences awareness of color changes</a> from <a href="http://vimeo.com/suchow">Jordan Suchow</a> on <a href="http://vimeo.com">Vimeo</a>.</p>

---

# Grammar of Graphics

  + Geom: Graphic element
  + Aesthetics: appearance of a geom
  + Data: raw, context, statistical aggregations of data
  + Mapping: functions which map data to geom properties or aesthetics

???

## Bringing Together

  + We've talked about different aesthetics of showing data, we've talked about
    data, all that's needed is to bring them together
  + Wilkinson, L. (2005), The Grammar of Graphics (2nd ed.). Statistics and Computing, New York: Springer.
  + Rigorous way of describing graphics beyond "scatter plot" or "bar chart"

---

# Scatter Plot animate:

  <img src="img/scatter-ice-cream.gif"/>

  + Geoms?
    + points, tick marks
  + Data?
    + temperature, sales
  + Mapping?
    + sales -> y, temp -> x
    + Note, not a simple 1:1 mapping, we must map to something visual, like
      pixels

???

## Ice Cream

  + Plot shows hypothetical sales of ice cream vs temperature
  + Geoms: points (actually, ticks are geoms, too)
  + Data: sales, temperature (and context: how large is the potential plot
    size)
  + Mapping: sales
  + img: http://www.mathsisfun.com/data/scatter-xy-plots.html

---

# Bar Plot animate:

  <img src="img/bar-graph-fruit.gif"/>

  + Geoms?
    + rectangles (ticks, text)
  + Data?
    + Fruit to popularity
  + Mapping?
    + popularity -> height, fruit type -> x, color

???

## Fruit

  + Plot shows fruit popularity
  + Geoms: bars (and ticket, text)
  + Data:
  + Mapping: sales
  + img: http://www.mathsisfun.com/data/bar-graphs.html

---

# Hipmonk

  <img src="img/hipmonk.png"/>

  + Geoms?
    + rectangles, text, ticks,
  + Data?
    + Carrier, flight time, layover time, cost, wifi available, airports
  + Mapping?
    + travel time -> bar length, flight times -> sub-bars, "agony" -> y, airline -> color

???

## Fruit

  + Shows travel options from SFO to Ithica, connecting flights, airports, etc.
  + More complex, but still expressible via Grammar
  + img: http://www.hipmonk.com

---

# Recursive

  <img src="img/grammar-af.png"/>

  + Geoms?

???

## Complex

  + Reading will go a further extension of this, where the geoms are themselves
    other plots

---

# Tufte

  + Clarity from data
  + Avoid chart junk
  + Techniques for displaying many types
  <img src="img/tufte-books.jpg"/>

???

## Tufte

  + No talk on visualization would be complete without mentioning Tufte
  + Great examples

---

# *Break*




---

Slide 1
  main
next slide is two column
Slide 2
  main
  notes
Slide 3
  main
  notes
Slide 4
  main
  notes
Slide 5
  main
  notes
Slide 6
  main
  notes
Slide 7
  main
    a series of sections will work better for some definitions
    a series of sections will work better for some definitions
    a series of sections will work better for some definitions
  notes
Slide 8
  main
  notes
Slide 9
  main
  notes
next slide is two column
Slide 10
  main
    a series of sections will work better for some definitions
    a series of sections will work better for some definitions
    a series of sections will work better for some definitions
  notes
Slide 11
  main
Slide 12
  main
  notes
Slide 13
  main
Slide 14
  main
Slide 15
  main
    a series of sections will work better for some definitions
    a series of sections will work better for some definitions
    a series of sections will work better for some definitions
    a series of sections will work better for some definitions
  notes
next slide is animated
Slide 16
  main
  notes
next slide is animated
Slide 17
  main
  notes
Slide 18
  main
  notes
Slide 19
  main
  notes
Slide 20
  main
  notes
Slide 21
  main
Headings are the right level?
