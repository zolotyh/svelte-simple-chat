.DEFAULT_GOAL := run

.PHONY: run build

run:
	npx npm-install-if-needed
	npx start-server-and-test 'node server/server.js' 3000 'npm run dev'

build:
	npx npm-install-if-needed
	npm run build

