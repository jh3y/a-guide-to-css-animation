PHONY: help

MODULES = ./node_modules/.bin
BS = $(MODULES)/browser-sync

OUTPUT_DIR = public

help:
	@grep -E '^[a-zA-Z\._-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

setup: ## set up project for development 🛠
	yarn

serve: ## sets up browser-sync local static server with livereload 🖥
	$(BS) start --port 3000 --files $(OUTPUT_DIR)/ --server $(OUTPUT_DIR) --no-notify
