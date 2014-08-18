## DataPlay.

### Introduction

Around the time I started working on [Jaded Gamer](http://jadedgamer.com/), I started working on a little script to scrape various websites relating to video game data. Since then, I've slowly expanded on it here and there, collecting more and more data. It's also now fully integrated it into the website, and acts as a web crawler, also indexing various video game news sites. For the longest time though, I really wasn't sure what I really wanted to do with all the information I've been collecting. Then, I came across the [The Feltron 2007 Annual Report](http://feltron.com/ar07_01.html), a yearly book of beautiful visualizations. This set off a spark to create something similar, but more web based. The [2012 Annual Video Game Report](http://data.alifewellplayed.com/2012-stats) is the first result. It's still a little rough around the edges, but it serves as a starting point.

### Why is this not hosted on Jaded Gamer?

Initially, this project *was* going to be built into Jaded Gamer, but later decided against it. I want Jaded to remain as unbiased as possible. Any kind of editorial work will be published elsewhere, like [A Life Well Played](http://alifewellplayed.com/) and Dataplay. So while I do generate the data with the help of Jadedgamer.com, the works created aren't directly associated with the site.

### Sources

As I mentioned, parts of the scripts are not pretty, but it does the job pretty well. The focus right now is to collect as much information on game titles, publishers/developers, and platforms as I can, as well as sales numbers. I've constructed a number of site scrapers/crawlers that comb over sites like [Giant Bomb](http://giantbomb.com), [VGChartz](http://www.vgchartz.com/), and [MobyGames](http://www.mobygames.com/). These seem to be the most accurate sources I've come across. The crawlers dump everything into a database, and if there's any conflicting data, I manually look it over and clean it up. Coincidentally, this has also helped me find and report a number of inaccuracies on Giant Bomb.

### What's Next

As I continue to collect and improve the data, I'll be releasing more updates. I'd especially like to cover more years, produce more annual reports, and explore more gaming trends. With over 40,000 games and thousands of companies, it's taking a little more time than I anticipated.

I'm also currently looking at options to make all the data publicly available, either in one large data dump, or via a RESTful API.
