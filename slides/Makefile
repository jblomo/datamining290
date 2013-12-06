PLACE_HOLDER=<\!--markdown goes here-->
SOURCES=$(wildcard *.markdown)
PRESENTATIONS=$(SOURCES:.markdown=.html)
EXECUTABLE=hello

all: $(PRESENTATIONS)

%.html: %.markdown presentation_template.html
	sed -e "/$(PLACE_HOLDER)/r $<" < presentation_template.html | sed -e "s/$(PLACE_HOLDER)//" > $@
