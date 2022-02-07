#Node.js Image 
FROM rustlang/rust:nightly
MAINTAINER adrianok@oregonstate.edu

RUN apt-get update && apt-get install -y nodejs npm
RUN npm install express --save
COPY . .
CMD ["node", "app.js"]
