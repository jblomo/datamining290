name: inverse
layout: true
class: left, top, inverse

---

# Bias vs. Variance

---

## Trade-offs

  + Similar to precision, we make trade-offs when training models
  + Bias: How far off are the model predictions on average?
  + Variance: If we retrained with different data, how different would our
    guesses be?

???

## Details

  + Bias: difference in "Expected" value from models from the real value
  + Variance: difference in "Expected" value from each other
  + Variance: Another way to think about it: how specific is our model to our
    data? If we were training a tree with k-fold validation, would we get
    completely different rule sets for each set of data?
  + "Expected": These are *model type* properties. Train the model multiple
    times with different data, then evaluate all models performance

---

## Regression

  + Can we do better than linear regression on some data sets?
  + Polynomial regression
  + How many polynomials?

<img src="img/overfit1.png"/>

???

## Polynomial

  + Sure! Use a polynomial instead: x<sup>2</sup>, 2x - x<sup>2</sup> + 4x<sup>3</sup>, ...
  + If you're not sure what the underlying data model is, have to test
  + img: http://cheshmi.tumblr.com/

---

## One

<img src="img/overfit1.png"/>

???

## So-So

  + How is the bias? Not great, fair amount of error
  + How is the variance? Pretty good, assuming random sample

---

## Two

<img src="img/overfit2.png"/>

???

## Better

  + Bias? Better, less error
  + Variance? more risky depending on which samples you get, since model
    diverges quickly

---

## Three

<img src="img/overfit3.png"/>

???

## Worrying

  + Now getting a little weird. We're not finding the general pattern, more
    like exactly fitting a line over these points
  + If we made model with different data, we're going to get a different line

---

## Many

<img src="img/overfit5.png" width=50% />

???

## Now kind of ridiculous

  + Intuitively we know this is not a description of the data
  + If a point was found near the border, completely dependant on the data the
    model trained on

---

## Over-fitting

  + Over-fitting
    + reflecting the exact data given instead of the general pattern
  + High variance is a sign of over-fitting
    + model guesses vary with the exact data given
  + Avoidance
    + ensembles average out variance, regularization adds a cost to model complexity

???

## Avoidance

  + Ensembles combine multiple models together. Those multiple models may have
    a lot of variance, but as long as they have good Bias, we'll center in on
    the correct result
  + Remember our cost function? We wanted to minimize the error. If you add in
    a way to measure model complexity, you can add that to the cost, so that
    you are explicitly trading-off the complexity of your model with the
    quality of the solution
  + If we wanted to add a complexity cost to the previous model, what would the
    cost be dependent on?

---

## Neural Networks

<img src="img/neuron_culture.jpg" width=90% />

???

  + img: http://adrianbowyer.blogspot.com/2010/12/hardwired.html

---

## Brains

  + Neural networks try to model our brains
  + Neurons/perceptrons sense input, transform it, send output
  + Neurons/perceptrons are connected together
  + Connections have different strengths

---

## Training

  + Learn by adjusting the strengths of the connections
  + Mathematically, strength is a weight multiplier of the output
  + Training is complete when we've found good weights

---

## Nomenclature

.left-column[

Input layer

  + neurons whose input is determined by features

Hidden layer

  + neurons that calculate a combination of features

Output layer

  + neurons that express the classification

Weights

  + numeric parameter to adjust input/output

]

.right-column[
.white-background[
<img src="img/nn.png" width=100% />
]
]

---

## Handwriting

  + Recognize handwritten digits

.white-background[
<img src="img/neuron11.gif" width=70% />
]

???

## Inputs => Outputs

  + Break up drawing cell into pixels
  + Input takes pixel=on|off
  + Output is highest valued output node, 1 for each digit
  + img: http://vv.carleton.ca/~neil/neural/neuron-d.html

---

## Forward Propagation

  1. Sum of inputs * weights
  1. Apply sigmoid
  1. Send output to next layer
  1. Repeat

---

## Repeat

  + Multiple hidden layers used to model complex feature interaction

<img src="img/2-layer-nn.gif" width=70% />

---

## Sigmoid

  + Normalize input to [0,1]
  + Makes weak input weaker, strong input stronger
  + ```1 / (1 + e^-input)```

.white-background[
<img src="img/sigmoid.png" width=90% />
]

---

## Example

.white-background[
<img src="img/nn-fp1.png" width=80% />
]

???

## Simple

  + Simple NN with just one output
  + Output can model true/false
  + Inputs are numerical

---

## Weights

.white-background[
<img src="img/ann2.png" width=80% />
]

???

## Later

  + We'll discuss how weights are determined later
  + Fill in the Hidden layer with sum of inputs * weights

---

## Sigmoid

.white-background[
<img src="img/ann3.png" width=80% />
]

???

## Apply

  + Apply the sigmoid to the incoming signals

---

## Sigmoid

.white-background[
<img src="img/ann4.png" width=80% />
]

???

## Apply

  + Apply the sigmoid to the incoming signals

---

## Sigmoid

.white-background[
<img src="img/ann5.png" width=80% />
]

???

## Apply

  + Apply the sigmoid to the incoming signals

---

## Sigmoid

.white-background[
<img src="img/ann6.png" width=80% />
]

???

## Apply

  + Apply the sigmoid to the incoming signals

---

## Weights

.white-background[
<img src="img/ann7.png" width=80% />
]

???

## Repeat

  + Take the outputs, apply weights, sum

---

## Sigmoid

.white-background[
<img src="img/ann8.png" width=80% />
]

???

## Apply

  + Apply the sigmoid to the incoming signals
  + Our result is greater than 0.5, so we can assume true
  + If we had multiple outputs, we could choose the highest one

---

## Forward Propagation

  1. Sum of inputs * weights
  1. Apply sigmoid
  1. Send output to next layer
  1. Repeat

???

## Get an answer

  + Now we have *an* output, but how do we train to get the *right* output?

---

## Fitness Function

  + Create a fitness function that measures the error
  + Take the derivative and a step in the right direction
  + Try again

???

## Neural Network

  + NN training is conceptually similar to gradient descent
  + We want to get closer to the answer, so we adjust our weights based on the
    amount of incorrectness in the system
  + Adjust weights, try again

---

## Back Propagation

  + Run forward
    + O<sub>j</sub> is output of node j
  + Calculate error of output layer
    + Err<sub>j</sub> = O<sub>j</sub>(1 - O<sub>j</sub>)(T<sub>j</sub>-O<sub>j</sub>)
  + Caclulate error of hidden layer
    + Err<sub>j</sub> = O<sub>j</sub>(1 - O<sub>j</sub>) sum(Err<sub>k</sub> w<sub>jk</sub>)
  + Find new weights
    + w<sub>ij</sub> = w<sub>ij</sub> + l Err<sub>j</sub> O<sub>i</sub>
  + Repeat
    + To move closer to correct weights

???

## Derivative

  + Derivative of the sigmoid is O<sub>j</sub>(1 - O<sub>j</sub>), so we're taking the gradient
  + ```l``` is the learning rate, similar to ```a``` step size in gradient descent

---

### Example

.left-column[

  + Expected Output is 0
    + t<sub>6</sub> = 0
  + Actual Output
    + o<sub>6</sub> = 0.8387
  + Output Error:
    + err<sub>6</sub> =
    + o<sub>6</sub>\*(1-o<sub>6</sub>)\*(t<sub>6</sub>-o<sub>6</sub>) =
    + -0.11346127339699999
  + Setup hidden node 5
    + o<sub>5</sub> = 0.9933
    + w<sub>56</sub> = 1.5
]

.right-column[

  + Error for node 5
    + err<sub>5</sub> =
    + o<sub>5</sub>\*(1-o<sub>5</sub>)\*(err<sub>6</sub>*w<sub>56</sub>)
    + -0.0011326458827956695
  + Adjust weight w<sub>56</sub>
    + l = 10  # learn rate
    + w<sub>56</sub> =
    + w<sub>56</sub> + l\*err<sub>6</sub>\*o<sub>5</sub> =
    + 0.37298917134759924

.white-background[
<img src="img/ann8.png" width=80% />
]
]

---

## Terminate Learning

  + Changes in weights too small
  + Accuracy in training models is high
  + Maximum number iterations
  + Maximum time for learning

???

## Forward and Back

  + Guess, correct, guess, correct
  + Stop when you've got a good model
  + or you model is not improving
  + or when you're out of time

---

## *Break*
