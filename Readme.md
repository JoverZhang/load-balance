# load balance

# Dependents
> docker >= 19

# Usage
#### If you have initialized docker-swarm, you can run it with:
```shell script
docker stack deploy lb -c docker-compose.yml
```
#### Then you can test it with: (Just `linux` or `mac`)
```shell script
./query.sh
```
Or open your browser: [http://127.0.0.1:8000](http://127.0.0.1:8000)

#### And check it with:
```shell script
docker ps
docker logs $CONTAINER_ID -f
```

# Tips
Initialize docker-swarm
```shell script
docker swarm init
```
