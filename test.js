'use strict';

const { homedir } = require('os');
const { join } = require('path');

const gitDirUp = require('.');

it('can find `.git` dir from `fixtures`', async () => {
  expect.assertions(1);
  const gitDir = await gitDirUp('fixtures');

  expect(gitDir).toBe(join(__dirname, '.git'));
});

it('can find `.git` dir from `process.cwd()`', async () => {
  expect.assertions(1);
  const gitDir = await gitDirUp();

  expect(gitDir).toBe(join(__dirname, '.git'));
});

it("can't find `.git` dir from `homedir()`", async () => {
  expect.assertions(1);
  const gitDir = await gitDirUp(homedir());

  expect(gitDir).toBe(null);
});
