import { access, stat } from 'node:fs/promises';

const requiredFiles = [
  'README.md',
  'LICENSE',
  'CONTRIBUTING.md',
  'CODE_OF_CONDUCT.md',
  'SECURITY.md',
  'CHANGELOG.md',
  '.editorconfig',
  '.gitattributes',
  '.gitignore',
  'package.json',
  'rtdb_s.js',
  '.github/ISSUE_TEMPLATE/bug_report.yml',
  '.github/ISSUE_TEMPLATE/feature_request.yml',
  '.github/PULL_REQUEST_TEMPLATE.md',
  '.github/workflows/check.yml',
];

const requiredDirs = ['css', 'js', 'lib', 'plugin'];

const failures = [];

async function requireFile(path) {
  try {
    const info = await stat(path);
    if (!info.isFile()) failures.push(`${path} is not a file`);
    if (info.size === 0) failures.push(`${path} is empty`);
  } catch {
    failures.push(`${path} is missing`);
  }
}

async function requireDir(path) {
  try {
    await access(path);
    const info = await stat(path);
    if (!info.isDirectory()) failures.push(`${path} is not a directory`);
  } catch {
    failures.push(`${path} is missing`);
  }
}

await Promise.all([
  ...requiredFiles.map(requireFile),
  ...requiredDirs.map(requireDir),
]);

if (failures.length) {
  console.error(`Repository check failed:\n- ${failures.join('\n- ')}`);
  process.exit(1);
}

console.log('Repository check passed.');
