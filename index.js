'use strict';

const findUp = require('find-up');

const gitDirUp = (cwd = process.cwd()) => findUp('.git', { cwd });

module.exports = gitDirUp;
