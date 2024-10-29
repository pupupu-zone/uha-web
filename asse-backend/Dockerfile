# Stage 1: Build Stage
FROM rust:1.82-bookworm AS build-stage

RUN apt update && \
  apt install -y --no-install-recommends \
  libssl-dev \
  musl-tools \
  libpq-dev

COPY . /app
WORKDIR /app

RUN cargo build --release

# Stage 2
FROM alpine:latest

RUN apk --no-cache add ca-certificates openssl

COPY --from=build-stage /app/target/release/subsawwy_backend /usr/local/bin/subsawwy_backend

# start app
CMD ["subsawwy_backend"]
EXPOSE 1337