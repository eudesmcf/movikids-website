const fs = require('fs');
const path = require('path');
const ghpages = require('gh-pages');

const cacheRoot = path.resolve(
  __dirname,
  '..',
  '.cache',
  `gh-pages-tmp-${Date.now()}`
);

process.env.CACHE_DIR = cacheRoot;

if (!fs.existsSync(path.resolve(process.cwd(), 'dist'))) {
  console.error('dist folder not found. Run build first.');
  process.exit(1);
}

const cnameSrc = path.resolve(process.cwd(), 'CNAME');
const cnameDest = path.resolve(process.cwd(), 'dist', 'CNAME');
if (fs.existsSync(cnameSrc)) {
  fs.copyFileSync(cnameSrc, cnameDest);
}

ghpages.publish('dist', (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
