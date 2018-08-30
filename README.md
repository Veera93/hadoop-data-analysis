# Hadoop Data Analysis

## Aim:
The goal of the project is to analyze, visualize and infer information on how the topic of interest (blockchain) is featured across various sources. Specific sources considered for this project are New York Times article and Twitter tweets.

## Data Collection: (Code folder)
For collecting twitter data provide the API details and file name as needed in the DataCollectionTwitter.ipynb.

1. Use the twitteR library to fetch the tweets based on the keywords and save them as sql lite file
2. Export the sql lite file as csv
3. Import the csv and save all the tweets as text file

For collecting nytimes data provide the API details, start date, end date and file name as needed in the DataCollectionNYTimes.ipynb. 

1. Use the New York Times API to fetch the new articles based on the keywords
2. Iterate and save all the urls
3. Hit the urls seperately and fetch the html content
4. Use the BeautifulSoap to parse the html
5. Get the content of the url and save the whole content in a single file

These files are organised into a folders and given as input to the hadoop process

### Keywords (NYT and Twitter):
1.	Blockchain
2.	Crypto
3.	Bitcoin
4.	Ethereum
5.	Ether
6.	dApp
7.	Initial Coin Offering
8.	R3 corda
9.	Hyperledger
10.	Litecoin

## Hadoop MapReduce:
The mappers and reducers for word count and word co occurance can be found under Code/Hadoop

### Data Cleaning (Inside Mappers):

The raw data collected had many undesirable words/ characters that needed to be filtered out. NLTK library in python was used to assist with the filtering process.

1.	Tokenized the input corpse
2.	Removed non-alpha numeric characters
3.	Removed punctuation
4.	Removed stop words
5.	Stemmed the words using Potter stemmer

### Word count: (mapper.py and reducer.py)

The filtering process happens in the mapper. The mapper picks the words of interest and emits its count. The reducer then gets the output of the mapper, and performs the aggregation (sum of each keyword) and returns the output.

### Word co-occurrence: (mapper-twitter.py, mapper-news.py and reducer.py)

The filtering process happens in the mapper. The mapper picks the words of interest and emits its count. The output of mapper is different from the previous case. Here it emits as pairs and count of the co-occurring words. The reducer then gets the output of the mapper and performs the aggregation similar to the word count.

## Steps to run Hadoop:

### 1. Load data into Hadoop HDFS:
hdfs dfs -put TwitterData <br>
hdfs dfs -put NewData <br>

where TwitterData contains all the tweets as text file and NewData contains all the news data as textfile

### 2. Start Hadoop jobs:
hadoop jar /usr/local/Cellar/hadoop/3.0.0/libexec/share/hadoop/tools/lib/hadoop-streaming-3.0.0.jar -file mapper.py -mapper mapper.py -file reducer.py -reducer reducer.py -input TwitterData -output twitter_wc <br>
hadoop jar /usr/local/Cellar/hadoop/3.0.0/libexec/share/hadoop/tools/lib/hadoop-streaming-3.0.0.jar -file mapper.py -mapper mapper.py -file reducer.py -reducer reducer.py -input NewData -output news_wc <br>
hadoop jar /usr/local/Cellar/hadoop/3.0.0/libexec/share/hadoop/tools/lib/hadoop-streaming-3.0.0.jar -file mapper_twitter.py -mapper mapper_twitter.py -file reducer.py -reducer reducer.py -input TwitterData -output twitter_co <br>
hadoop jar /usr/local/Cellar/hadoop/3.0.0/libexec/share/hadoop/tools/lib/hadoop-streaming-3.0.0.jar -file mapper_news.py -mapper mapper_news.py -file reducer.py -reducer reducer.py -input NewData -output news_wc <br>

### 3. Get the data to the local file system
hdfs dfs -get twitter_wc ../Output/hdfs/ <br>
hdfs dfs -get twitter_co ../Output/hdfs/ <br>
hdfs dfs -get news_wc ../Output/hdfs/ <br>
hdfs dfs -get news_co ../Output/hdfs/ <br>

## Data Visualization

Highchart.js is used for data visualization and it requires the output of hadoop to transformed it json format and array of arrays format. For this purpose use DataVisualization.ipynb. Currently, for the demo purpose I have already ran the hadoop process and stored the output in Output folder.

1. Execute DataVisualization.ipynb
2. Copy the json output of getWordCount(newsWC) and getWordCount(twitterWC) and paste it in the Part2/Visualization/word-count/data.js under twitterWC and newsWC respectively <br>
3. For co occurance enter the words of your interest in news_words and twitter_words and execute getCoOccurance(twitter, twitter_words) and getCoOccurance(news, news_words) <br>
4. Now copy the output and paste it inside Part2/Visualization/co-occurance/data.js under newsdata and twitterdata. Also change newsheading and twitter heading based on you words of interest
5. Start the local server from Visualization folder

### Word cloud for Word Count: 

An interactive website to visualize the data processed. The user can select the source of data (NY times and twitter) and can also specify the top of words of interest. This will show a word cloud visualization of the selected parameters. 

### Heat Map for Co occurrence: 
The data for co-occurrence is visualized as a heat map. Similar to the word count, the user can select the source and top N of words.

### You can also view the data visualization in the report.docx

## Inference: 

### The data collected from NY Times:

Prominent words occurring are said, Bitcoin, Blockchain, investor, company, new, market, trade, cryptocurrency. New York times articles are professional and well edited when published, that’s why one can see words like company, investors, new, market etc. These things are not prominent in tweets

In NYT articles, blockchain and its associated components are seen as new technology that is grabbing the attention of the investors and market. There has been a lot said about the technology components. We can see that words such as would, could and like which symbolizes the unpredictability of blockchain technology

### The data collected from Twitter:

The data collected from twitter whereas has more technical terms associated with it like bitcoin, ethereum, hyperledger, ico. The trending components such as bitcoin and hyperledger have been more prominent, People have tweeted more about the technology and its components, especially about trading by means of btc, coin, ether, xrp.

## Conclusion:
To sum up, the tweets have all been about the technology and its various components and the new article is more about what effect the technology has in the real-world market.

