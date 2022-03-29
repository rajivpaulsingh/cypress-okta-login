FROM cypress/included:6.2.1

RUN mkdir /app
WORKDIR /app

COPY . /app

RUN npm install
RUN $(npm bin)/cypress cache path
RUN $(npm bin)/cypress cache list
RUN $(npm bin)/cypress verify
RUN ["npm", "run", "cy:run"] 