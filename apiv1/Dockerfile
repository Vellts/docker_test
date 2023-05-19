FROM --platform=linux/amd64 node:latest

WORKDIR /apiv1

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
