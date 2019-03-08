FROM node:alpine
WORKDIR "/app"
COPY ./package.json ./
RUN npm install
COPY ./ ./
CMD ["npm", "start"]

# COPY ./ ./
# RUN npm install --save

# EXPOSE 3004
# CMD ["npm", "run", "seed"]
# CMD ["npm", "run", "dev:react"]

# docker build -t someName .
# docker run someName