// Run inside the fresh npm consumer, using only installed files.
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';

const root = path.resolve('node_modules/@dztabel/diagramkit');
const json = file => JSON.parse(readFileSync(file, 'utf8'));
const pkg = json(path.join(root, 'package.json'));
const entry = path.join(root, pkg.bin.diagramkit);
const env = { ...process.env, DIAGRAMKIT_NO_SETUP: '1', DIAGRAMKIT_HOME: path.resolve('state') };
const cli = (...args) => JSON.parse(execFileSync(process.execPath, [entry, ...args], { env, encoding: 'utf8' }));
assert.equal(statSync(path.join(root, 'README.md')).size, 0);
assert.equal(pkg.bin['diagram-kit'], pkg.bin.diagramkit);
assert.equal(cli('doctor').ok, true);
cli('schema', 'compound');
cli('sync-skill', '--out', 'skill');
const packagedSkill = path.join(root, 'skills/diagramkit');
const files = dir => readdirSync(dir, { recursive: true }).filter(f => statSync(path.join(dir, f)).isFile()).sort();
assert.deepEqual(files('skill'), files(packagedSkill));
for (const name of files('skill'))
    assert.deepEqual(readFileSync(path.join('skill', name)), readFileSync(path.join(packagedSkill, name)));
const protocol = json('skill/protocol.json');
assert.equal(protocol.version, pkg.version);
for (const type of protocol.types) assert.ok(existsSync(path.join('skill/types', type.id + '.md')));
for (const name of protocol.examples)
    assert.deepEqual(json(path.join('skill/examples', name + '.json')), json(path.join(root, 'examples', name + '.json')));
const example = 'performance-payment';
cli('example', example, '--out', 'example.json');
assert.deepEqual(json('example.json'), json('skill/examples/' + example + '.json'));
cli('validate', 'example.json', '--strict');
const result = cli('build', 'example.json', '--out', 'figure', '--format', 'all', '--strict');
assert.ok(result.ok && result.quality.score >= 90);
for (const ext of ['png', 'svg', 'pdf']) assert.ok(statSync('figure/diagram.' + ext).size > 0);
assert.equal(cli('verify', 'figure').ok, true);
console.log(JSON.stringify({ version: pkg.version, platform: process.platform, arch: process.arch,
    skillFiles: files('skill').length, examples: protocol.examples.length, score: result.quality.score }));
