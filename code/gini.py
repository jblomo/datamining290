#!/usr/bin/python
"""Script can be used to calculate the Gini Index of a column in a CSV file.

Classes are strings."""

import fileinput
import csv

column = 2  # Candidate Name

############### Set up variables
gini = 0

############### Read through files
for row in csv.reader(fileinput.input()):
    if not fileinput.isfirstline():
        ###
        # TODO: replace line below with code to gather information needed to
        # calculate Gini Index
        pass
        ##/

###
# TODO: Calculate Gini Index with information gathered above
#
#/

print "Gini Index: %s" % gini
