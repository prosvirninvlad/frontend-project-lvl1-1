install:
	npm install

brain-games:
	node games/brain-games.js

brain-even:
	node games/brain-even.js

publish:
	npm publish --dry-run

lint:
	npx eslint .