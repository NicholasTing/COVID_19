# secret_project 1.0
Secret project to battle/track corona virus
A webapp that allows users to record (as much as they can) their daily activities so as to facilitate contact tracing by reducing the issue of forgetfulness in contact tracing process.

# STACK
Maybe we should use AWS stack like:
1. RDS or S3 (depends where we want to store our data - MongoDB (not aws tho) (postgresQL through RDS)
2. EC2 / Lambda / ECS - not sure which one is the best yet
3. Host website - heroku? or can use AWS S3 to host a static website



# TODO:
Business side
1. Define use cases - track people, places at a moment in time? 
2. Target users - anyone in the world, with access to internet, who is vigilant and wants to reduce the risks of spreading the virus unknowingly.
3. Find out similar apps
4. Draw up UI and find out things we need.

Dev side
1. Set up Database (PostGreSQL? or MongoDB?) 
2. Host website online
3. Define stack - (Confirmed - Express, Node) (TBD - Typescript/ReactJS/Python??)
4. Front end - ??? Idk i suck at front end tbh can use react
5. Come up with MVP (Basic feature 1)


# Basic features 
1. Allows input of 
   - date
   - activities (time, locations and people interacted with)
   - transport mode (and other passengers involved)
   - symptoms experienced
2. allows export of the data above for retrieval by medical staff


# Timeline:
6 March 2020 - idea first thought of by YX 
------
5 April 2020 - get MVP ready
------
12 April 2020 - Polish UI, publish it and get feedback along the way
------
21 June 2020 - app installed by 10 million people worldwide, nick gets hired by Google and yx gets hired by NASA
------

# Some cool pages to look at:
1. https://wuhan2020.kaiyuanshe.cn/# - idk i saw it on github somewhere, dunno how to read tho but think its pretty good.
2. https://www.gov.sg/article/help-speed-up-contact-tracing-with-tracetogether

# Ways of working - this really solves merge conflicts 

1. git checkout develop (hopefully already done this)
2. git checkout -b feature/<feature-name>  for example -- git checkout -b feature/login_page
3. then work on that branch, when read to merge, create a pull request into develop branch
