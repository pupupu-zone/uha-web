### Backup PostgreSQL

```sh
# raw
docker exec -t your-db-container pg_dumpall -c -U your-db-user > dump_$(date +%Y-%m-%d_%H_%M_%S).sql

# compressed
docker exec -t your-db-container pg_dumpall -c -U your-db-user | gzip > ./dump_$(date +"%Y-%m-%d_%H_%M_%S").gz
```

### Restore pg
```sh
# raw
cat your_dump.sql | docker exec -i your-db-container psql -U your-db-user -d your-db-name

# compressed
gunzip < your_dump.sql.gz | docker exec -i your-db-container psql -U your-db-user -d your-db-name
```

### Backup Redis

#### Dump bd
```sh
#!/bin/bash
rdb_file="/FOLDER_TO_YOUR_REDIS_DUMP_FILE/redis/dump.rdb"
redis_cli="/usr/bin/redis-cli"

DIR=`date +%d-%m-%y`
DEST=~/redis_backups/$DIR
mkdir $DEST

echo save | $redis_cli
exit 1
```

#### Restore bd

```sh
# Step 1: Make sure AOF is disabled

appendonly no # in redis.config

# Step 2: Stopping the Redis server
sudo service redis-server stop

# Step 3: Restoring the Redis database
sudo cp /redis_backups/20220810/dump.rdb /home/redis/dump.rdb
sudo chmod 660 /home/redis/dump.rdb

# Step 4: Re-starting Redis server
sudo service redis-server start
```

### Sync
DB dumps have to be synced with google drive or whatever else daily and stored for 30 days in row