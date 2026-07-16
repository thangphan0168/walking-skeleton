FROM denoland/deno:debian-2.8.1

WORKDIR /app

COPY package.json .

RUN deno install

COPY . .

CMD [ "run", "dev", "--host"]
