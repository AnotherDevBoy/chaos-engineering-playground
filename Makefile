build:
	docker build -t albertowar/node-web-app .

run:
	docker run -p 3000:3000 -d albertowar/node-web-app

run-all:
	docker-compose up

kill-all:
	docker-compose down
