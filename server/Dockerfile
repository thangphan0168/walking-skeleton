FROM denoland/deno:alpine-2.8.1

WORKDIR /app

COPY deno.json .

RUN deno install

COPY . .

CMD [ "run", "--allow-env", "--allow-net", "--watch", "app-run.js" ]
