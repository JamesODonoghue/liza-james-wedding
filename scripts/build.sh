npm run build:css
npx rimraf dist
npx tsc 
npx rollup -c rollup.config.js 
mkdir -p dist/src/assets 
cp -a src/assets dist/src 
cp _redirects dist