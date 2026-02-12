const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    fs.mkdirSync(dest, { recursive: true });
    fs.readdirSync(src).forEach(function(childItemName) {
      copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

try {
  // 1) build
  console.log('Running build...');
  execSync('npm run build', { stdio: 'inherit' });

  // 2) prepare preview folder preview_root/<repo-name>/
  const repoName = 'web-site-clinica-lovable';
  const root = path.resolve(process.cwd(), '..', 'preview_root');
  const target = path.join(root, repoName);

  // remove existing preview_root if any
  if (fs.existsSync(root)) {
    fs.rmSync(root, { recursive: true, force: true });
  }
  fs.mkdirSync(target, { recursive: true });

  // copy dist -> preview_root/<repoName>/
  const dist = path.resolve(process.cwd(), 'dist');
  if (!fs.existsSync(dist)) {
    console.error('dist folder not found. Build may have failed.');
    process.exit(1);
  }
  copyRecursiveSync(dist, target);

  // 3) serve preview_root on port 5173
  console.log('Serving preview at: http://localhost:5173/' + repoName + '/');
  execSync('npx http-server "' + root + '" -p 5173', { stdio: 'inherit' });
} catch (err) {
  console.error(err);
  process.exit(1);
}
