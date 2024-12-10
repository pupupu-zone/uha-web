# ASSE API

api.subsawwy.com

### Create local PostgresSQL
```sh
# Install & run
docker run -d \
  --name subsawwy-postgres-dev \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=some_password \
  -e POSTGRES_DB=subsawwy-dev \
  -p 5555:5432 \
  postgres:16
```

Handling errors
```sh
# Init role
docker exec -it subsawwy-postgres-dev bash
psql -U postgres
\du # Check if role exists

# if postgres role does not presented, run
CREATE ROLE postgres WITH LOGIN SUPERUSER PASSWORD 'postgres';

# if error "role postgres does not exist" appeared, check active parallel port and disable possible running instances on bare metal:
lsof -n -i:5432 | grep LISTEN
```

```env
DATABASE_URL=postgresql://postgres:some_password@localhost:5555/subsawwy-dev
```

### Run migration
```sh
cargo install diesel_cli --no-default-features --features postgres

diesel migration run
```

### New migration
```sh
diesel migration generate <migration_name>

# fill up.sql & down.sql

# Apply migrations
diesel migration run

# Revert migrations
diesel migration revert
```