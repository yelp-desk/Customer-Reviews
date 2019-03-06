FROM node:alpine

COPY ./ ./
RUN npm install --save

# EXPOSE 3004
CMD ["npm", "run", "seed"]
CMD ["npm", "run", "dev:react"]
CMD ["npm", "start"]

# docker build -t someName .
# docker run someName