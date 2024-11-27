# Stage 1: Plan dependencies
FROM rust:1.82-bookworm AS chef
WORKDIR /app
RUN cargo install cargo-chef
RUN apt-get update && apt-get install -y --no-install-recommends libssl-dev musl-tools libpq-dev

# Stage 2: Compute recipe
FROM chef AS planner
COPY . .
RUN cargo chef prepare --recipe-path recipe.json

# Stage 3: Build with cache
FROM chef AS builder
COPY --from=planner /app/recipe.json recipe.json
RUN cargo chef cook --release --recipe-path recipe.json
COPY . .
RUN cargo build --release

# Stage 4: Final stage
FROM debian:bookworm-slim
RUN apt-get update && apt-get install -y --no-install-recommends \
  ca-certificates \
  libssl-dev \
  libpq5 \
  && rm -rf /var/lib/apt/lists/*

COPY ./migrations ./migrations
COPY --from=builder /app/target/release/subsawwy_backend /usr/bin

EXPOSE 1337
CMD ["subsawwy_backend"]