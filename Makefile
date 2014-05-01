PLACE_HOLDER=<\!--markdown goes here-->
SLIDE_SOURCES=$(wildcard slides/*.markdown)
SLIDES=$(SLIDE_SOURCES:.markdown=.html)

all: index.html $(SLIDES)

index.html: README.markdown
	pandoc README.markdown -t html -c slides/production/common.css > index.html

%.html: %.markdown slides/slide_template.html
	sed -e "/$(PLACE_HOLDER)/r $<" < slides/slide_template.html | sed -e "s/$(PLACE_HOLDER)//" > $@
