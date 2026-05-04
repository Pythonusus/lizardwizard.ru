# Install all dependencies
install:
	npm ci

# Install only prod dependencies
install-prod:
	npm ci --production

# Run development server
dev:
	npm run dev

build:
	npm run build

# Preview production build
preview:
	npm run preview

lint-js:
	npm run lint:js

lint-html:
	npm run lint:html

lint-css:
	npm run lint:css

format-js:
	npm run format:js

format-html:
	npm run format:html

format-css:
	npm run format:css

format-prettier:
	npm run format:prettier

format-check:
	npm run format:check

lint: lint-js lint-html lint-css format-check

format: format-js format-html format-css format-prettier

.PHONY: install install-prod dev build preview lint-js lint-html lint-css format-js format-html format-css format-prettier format-check lint format
