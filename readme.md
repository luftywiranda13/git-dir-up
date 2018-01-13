# git-dir-up

> Find the closest `.git` directory

[![Package Version](https://img.shields.io/npm/v/git-dir-up.svg?style=flat-square)](https://www.npmjs.com/package/git-dir-up)
[![Downloads Status](https://img.shields.io/npm/dm/git-dir-up.svg?style=flat-square)](https://npm-stat.com/charts.html?package=git-dir-up&from=2016-04-01)
[![Build Status: Linux](https://img.shields.io/travis/luftywiranda13/git-dir-up/master.svg?style=flat-square)](https://travis-ci.org/luftywiranda13/git-dir-up)
[![Coverage Status](https://img.shields.io/codecov/c/github/luftywiranda13/git-dir-up/master.svg?style=flat-square)](https://codecov.io/gh/luftywiranda13/git-dir-up)

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

gitDirUp(__dirname).then(filepath => {
  console.log(filepath);
  //=> '/Users/luftywiranda/foo/.git'
});
```

## API

### gitDirUp([cwd])

Returns a `Promise` for either the filepath or `null` if it couldn't be found.

#### cwd

Type: `string`<br />
Default: `process.cwd()`

Directory to start from.

## Related

* [git-root-dir](https://github.com/luftywiranda13/git-root-dir) – Find the root directory of a `git` repository
* [pkg-up](https://github.com/sindresorhus/pkg-up) – Find the closest `package.json` file

## License

MIT &copy; [Lufty Wiranda](https://www.luftywiranda.com)
