#!/usr/bin/env python3

import sys

current_word = None
current_count = 1

for line in sys.stdin:
    word, count = line.strip().split('\t',1)
    if current_word:
        if word == current_word:
            current_count += int(count)
        else:
            print ("%s\t%d" % (current_word, current_count))
            current_count = 1

    current_word = word

if current_count > 1:
    print ("%s\t%d" % (current_word, current_count))
