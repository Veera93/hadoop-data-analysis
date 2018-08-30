#!/usr/bin/python3
import sys
import nltk
import string
import re
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from nltk.stem.porter import PorterStemmer

def process_text(text):
	# Convert text to lower case
	text = text.lower()
	#Tokenizing the input
	tokenized_text = word_tokenize(text)
	punc = string.punctuation
	regex = re.compile('[%s]' % re.escape(punc))
	tokenized_text_without_punc = []
	# Remove punctuation
	for token in tokenized_text: 
		new_token = regex.sub(u'', token)
		if not new_token == u'':
			tokenized_text_without_punc.append(new_token)
    	
	tokenized_text_without_stopwords = []
	stop_words = stopwords.words('english')
	custom_stop_words = ["rt", "http", "could", "one", "ms", "mr", "follow", "amp", "retweet", "hi", "https"]
	stop_words = stop_words + custom_stop_words
	
	# Remove stop words
	for word in tokenized_text_without_punc:
		if not word in stop_words:
			tokenized_text_without_stopwords.append(word)

	#Use porter stemmer for stemming
	porter = PorterStemmer()

	pre_processed_text = []
	for word in tokenized_text_without_stopwords:
    		pre_processed_text.append(porter.stem(word))

	words = [word for word in pre_processed_text if word.isalpha()]

	return words
    
for line in sys.stdin:
	#Pre process the words
	words = process_text(line)
	for word in words:
		#Emit key:word, value:1
		print ('%s\t%s' % (word,1))
