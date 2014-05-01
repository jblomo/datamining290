"""
python org2md.py test.org test.markdown && sed -e "/<\!--markdown goes here-->/r test.markdown" < slide_template.html | sed -e "s/<\!--markdown goes here-->//" > test.html && fmdiff test.markdown 2014-02-06-Preprocessing.markdown
python org2md.py test.org ../test.markdown
"""
import re
import sys


HEADER = '''name: inverse
layout: true
class: left, top, inverse

'''

LINES_TO_ELIMINATE = set([
    r'''#+STYLE: <link rel="stylesheet" type="text/css" href="production/common.css" />''',
    r'''#+STYLE: <link rel="stylesheet" type="text/css" href="production/screen.css" media="screen" />''',
    r'''#+STYLE: <link rel="stylesheet" type="text/css" href="production/projection.css" media="projection" />''',
    r'''#+STYLE: <link rel="stylesheet" type="text/css" href="production/color-blue.css" media="projection" />''',
    r'''#+STYLE: <link rel="stylesheet" type="text/css" href="production/presenter.css" media="presenter" />''',
    r'''#+STYLE: <link href='http://fonts.googleapis.com/css?family=Lobster+Two:700|Yanone+Kaffeesatz:700|Open+Sans' rel='stylesheet' type='text/css'>''',
    r'''#+BEGIN_HTML''',
    r'''<script type="text/javascript" src="production/org-html-slideshow.js"></script>''',
    r'''#+END_HTML''',
    r'''# Local Variables:''',
    r'''# org-export-html-style-include-default: nil''',
    r'''# org-export-html-style-include-scripts: nil''',
    r'''# buffer-file-coding-system: utf-8-unix''',
    r'''# End:''',
])


def count_of_leading_char(s, leading_char):
    index = 0
    while index < len(s) and s[index] == leading_char:
        index += 1
    return index


def main(input_filename, output_filename):
    todo = []
    slide_number = 0
    under_heading = False

    with open(output_filename, 'wb') as output_file:
        output_file.write(HEADER)
        with open(input_filename, 'rb') as input_file:
            for line in input_file:
                line = line[:-1]  # remove \n

                if line in LINES_TO_ELIMINATE:
                    continue

                if under_heading and line.strip():
                    output_file.write('\n')

                # Checks for upcoming slide
                if ':animate:' in line:
                    todo.append('next slide is animated')
                if ':two_col:' in line:
                    todo.append('next slide is two column')

                # Is this a new slide?
                if ':slide:' in line:
                    slide_number += 1
                    todo.append('Slide %d' % slide_number)
                    todo.append('  main')
                    output_file.write('---\n\n')
                    line = line.replace(':slide:', '')

                # Is this notes?
                if ':notes:' in line:
                    todo.append('  notes')
                    output_file.write('\n???\n\n')
                    line = line.replace(':notes:', '')

                # Is this a heading?
                if line.startswith('*'):
                    level = count_of_leading_char(line, '*')
                    line = (level * '#') + line[level:]
                    under_heading = True
                else:
                    under_heading = False

                # Normalize indentation (should be an even number of spaces)
                if count_of_leading_char(line, ' ') % 2:
                    line = line[1:]

                # Definitions
                if ' :: ' in line:
                    todo.append('    a series of sections will work better for some definitions')
                    line = line.replace(' :: ', ': ')

                # Images
                line = re.sub(
                    r'''\[\[(file:)?([^\]]+)\]\]''',
                    r'''<img src="\2"/>''',
                    line
                )

                # Links
                old_line = line
                line = re.sub(
                    r'''\[\[([^]]+)\]\[([^]]+)\]\]''',
                    r'''[\2](\1)''',
                    line
                )
                if old_line != line:
                    todo.append('    check link')

                # Block code
                line = re.sub(
                    r'''#\+begin_src *''',
                    '```',
                    line
                )
                line = line.replace('#+end_src', '```')

                # Inline code
                line = re.sub(
                    r''' =([^ =].*?[^ ])=''',
                    r''' ```\1```''',
                    line
                )

                # Jim --> Jimmy
                line = line.replace('Jim', 'Jimmy')
                line = line.replace('jim', 'jimmy')
                line = line.replace('Blomo', 'Retzlaff')
                line = line.replace('jblomo', 'jretz')

                # Table
                first_bar = line.find('|')
                if first_bar >= 0:
                    if line.find('|', first_bar + 1):
                        todo.append('    table')

                # Unknown construct
                if line.startswith('#+'):
                    print 'Unknown construct:', line

                output_file.write(line.rstrip())
                output_file.write('\n')

        todo.append('Headings are the right level?')
        output_file.write('\n---\n\n')
        for line in todo:
            output_file.write(line)
            output_file.write('\n')


if __name__ == '__main__':
    main(*sys.argv[1:])
