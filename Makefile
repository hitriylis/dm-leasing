install:
	npm install

lint:
	npx stylelint ./src/styles/**/*.scss
	npx htmlhint ./src/*.html

sass:
	sass -w --no-source-map src/styles/scss/app.scss src/styles/css/app.css

deploy:
	npx surge ./src/ --domain dm-leasing.surge.sh