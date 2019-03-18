# HELP
# This will output the help for each task
# thanks to https://marmelab.com/blog/2016/02/29/auto-documented-makefile.html
.PHONY: help

help: ## This help
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

.DEFAULT_GOAL := help

# DOCKER TASKS
# Build the container
build: ## Build the container
	docker build -t williamchanrico/arzhonid:latest .

run: ## Run container
	docker run -d -p 8080:80 --name arzhonid williamchanrico/arzhonid:latest

stop: ## Stop container
	docker stop arzhonid;
	docker rm arzhonid;
