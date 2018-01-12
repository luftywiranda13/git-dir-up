# git-dir-up

[![Package Version](https://img.shields.io/npm/v/git-dir-up.svg)](https://www.npmjs.com/package/git-dir-up)
[![Build Status: Linux](https://img.shields.io/travis/luftywiranda13/git-dir-up/master.svg)](https://travis-ci.org/luftywiranda13/git-dir-up)
[![Coverage Status](https://img.shields.io/codecov/c/github/luftywiranda13/git-dir-up/master.svg)](https://codecov.io/gh/luftywiranda13/git-dir-up)
[![Downloads Status](https://img.shields.io/npm/dm/git-dir-up.svg)](https://npm-stat.com/charts.html?package=git-dir-up&from=2016-04-01)

Find the closest `.git` directory

Useful for tools that need to know whether `git` is managing the things inside.

## Installation

```sh
npm install --save git-dir-up
```

## Usage

```sh
/
└── Users
    └── luftywiranda
        └── foo
            ├── .git
            └── bar
                ├── baz
                └── example.js
```

```js
// example.js
const gitDirUp = require('git-dir-up');

gitDirUp(__dirname).then(path => {
  console.log(path);
  //=> '/Users/luftywiranda/foo/.git'
});
```

## API

### gitDirUp([cwd])

Returns `Promise<string>` for the path of `.git` or `null` if no `.git` dir found.

#### cwd

Type: `string`<br />
Default: `process.cwd()`

Directory to start from.

## Related

* [git-root-dir](https://github.com/luftywiranda13/git-root-dir) – Find the root path of a git project
* [pkg-dir](https://github.com/sindresorhus/pkg-dir) – Find the root directory of a Node.js project or npm package

## License

MIT &copy; [Lufty Wiranda](https://www.luftywiranda.com)
