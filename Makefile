.PHONY: build run push stop test clean all

VERSION        := 0.1
IMAGE_TAG      := williamchanrico/arzhonid
CONTAINER_NAME := arzhonid

# HELP
# This will output the help for each task
# thanks to https://marmelab.com/blog/2016/02/29/auto-documented-makefile.html
.PHONY: help

help: ## Help message
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

.DEFAULT_GOAL := help

# DOCKER TASKS
# Build the container
build: ## Build the container
	docker build -t ${IMAGE_TAG}:${VERSION} .

run: ## Run container
	docker run -d -p 8080:80 --name ${CONTAINER_NAME} ${IMAGE_TAG}:${VERSION}

push: ## Push image
	docker push ${IMAGE_TAG}:${VERSION}

stop: ## Stop container
	docker rm -f ${CONTAINER_NAME};
