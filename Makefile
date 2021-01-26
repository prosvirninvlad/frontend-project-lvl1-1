install:
	npm install

brain-games:
	node games/brain-games.js

brain-even:
	node games/brain-even.js

brain-calc:
	node games/brain-calc.js

brain-gcd:
	node games/brain-gcd.js

publish:
	npm publish --dry-run

lint:
	npx eslint .