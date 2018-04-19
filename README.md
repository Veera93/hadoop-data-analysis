# hadoop-data-analysis

## Steps to run Hadoop:

### 1. Load data into Hadoop HDFS:
hdfs dfs -put TwitterData <br>
hdfs dfs -put NewData <br>

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

1. Execute DataVisualization.ipynb <br>
2. Copy the json output of getWordCount(newsWC) and getWordCount(twitterWC) and paste it in the Part2/Visualization/word-count/data.js under twitterWC and newsWC respectively <br>
3. For co occurance enter the words of your interest in news_words and twitter_words and execute getCoOccurance(twitter, twitter_words) and getCoOccurance(news, news_words) <br>
4. Now copy the output and paste it inside Part2/Visualization/co-occurance/data.js under newsdata and twitterdata. Also change newsheading and twitter heading based on you words of interest
5. Start the local server to see the visualization
