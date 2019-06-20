build:
	docker build -t albertowar/node-web-app -f ./app/Dockerfile ./app
	docker build -t albertowar/locust-test -f ./test/Dockerfile ./test

run:
	docker run -p 3000:3000 albertowar/node-web-app

run-all:
	docker-compose up

kill-all:
	docker-compose down
