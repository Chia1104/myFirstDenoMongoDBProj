FROM denoland/deno:1.10.3
EXPOSE 8888
WORKDIR /app
USER deno
COPY . .
CMD ["run", "--allow-net", "--allow-read", "server.ts"]