# Stage 1
FROM rust:1.81-alpine AS build-stage

RUN apk add openssl-dev musl-dev postgresql-dev

COPY . /app
WORKDIR /app

RUN cargo build --release

# Stage 2
FROM alpine:latest

RUN apk --no-cache add ca-certificates openssl

COPY --from=build-stage /app/target/release/asse_backend /usr/local/bin/asse_backend

# start app
CMD ["asse_backend"]
EXPOSE 1337