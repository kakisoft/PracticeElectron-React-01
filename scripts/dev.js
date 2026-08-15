const { spawn } = require('child_process');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const tscCli = path.join(projectRoot, 'node_modules', 'typescript', 'bin', 'tsc');
const electronmonCli = path.join(projectRoot, 'node_modules', 'electronmon', 'bin', 'cli.js');

const children = [
  spawn(
    process.execPath,
    [tscCli, '-p', 'tsconfig.json', '--watch', '--preserveWatchOutput'],
    { cwd: projectRoot, stdio: 'inherit' }
  ),
  spawn(
    process.execPath,
    [
      electronmonCli,
      '.',
      '--disable-gpu',
      '--disable-software-rasterizer',
      '--no-sandbox'
    ],
    { cwd: projectRoot, stdio: 'inherit' }
  )
];

let stopping = false;

function stop(exitCode) {
  if (stopping) {
    return;
  }

  stopping = true;
  for (const child of children) {
    if (!child.killed) {
      child.kill();
    }
  }

  setTimeout(() => process.exit(exitCode), 500).unref();
}

for (const child of children) {
  child.on('exit', (code, signal) => {
    if (!stopping) {
      console.error(`Development process stopped (${signal ?? `code ${code}`}).`);
      stop(code ?? 1);
    }
  });
}

process.on('SIGINT', () => stop(0));
process.on('SIGTERM', () => stop(0));
