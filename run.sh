docker stop $(docker ps -aq)
docker-compose build
docker-compose up -d
