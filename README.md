![header image](https://github.com/jeremyscatigna/relauncher/blob/master/relauncher1.png)


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/relauncher.svg)](https://npmjs.org/package/relauncher)
[![CircleCI](https://circleci.com/gh/jeremyscatigna/relauncher.svg?style=svg)](https://circleci.com/gh/jeremyscatigna/relauncher)
[![codecov](https://codecov.io/gh/jeremyscatigna/relauncher/branch/master/graph/badge.svg)](https://codecov.io/gh/jeremyscatigna/relauncher)
[![Downloads/week](https://img.shields.io/npm/dw/relauncher.svg)](https://npmjs.org/package/relauncher)
[![License](https://img.shields.io/npm/l/relauncher.svg)](https://github.com/jeremyscatigna/relauncher/blob/master/package.json)

Create a new react app using every tools you love

![header image](https://github.com/jeremyscatigna/relauncher/blob/master/relauncher2.png)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g relauncher
$ relauncher COMMAND
running command...
$ relauncher (-v|--version|version)
relauncher/0.0.3 darwin-x64 node-v10.16.0
$ relauncher --help [COMMAND]
USAGE
  $ relauncher COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`relauncher build [FILE]`](#relauncher-build-file)
* [`relauncher create [DIR]`](#relauncher-create-dir)
* [`relauncher hello [FILE]`](#relauncher-hello-file)
* [`relauncher help [COMMAND]`](#relauncher-help-command)
* [`relauncher serve [FILE]`](#relauncher-serve-file)

## `relauncher build [FILE]`

build your app

```
USAGE
  $ relauncher build [FILE]

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ relauncher build
```

_See code: [src/commands/build.ts](https://github.com/jeremyscatigna/relauncher/blob/v0.0.3/src/commands/build.ts)_

## `relauncher create [DIR]`

create your app

```
USAGE
  $ relauncher create [DIR]

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ relauncher create myapp
```

_See code: [src/commands/create.ts](https://github.com/jeremyscatigna/relauncher/blob/v0.0.3/src/commands/create.ts)_

## `relauncher hello [FILE]`

describe the command here

```
USAGE
  $ relauncher hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ relauncher hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/jeremyscatigna/relauncher/blob/v0.0.3/src/commands/hello.ts)_

## `relauncher help [COMMAND]`

display help for relauncher

```
USAGE
  $ relauncher help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.1/src/commands/help.ts)_

## `relauncher serve [FILE]`

serve your app

```
USAGE
  $ relauncher serve [FILE]

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ relauncher serve
```

_See code: [src/commands/serve.ts](https://github.com/jeremyscatigna/relauncher/blob/v0.0.3/src/commands/serve.ts)_
<!-- commandsstop -->
