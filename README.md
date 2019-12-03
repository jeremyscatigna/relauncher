relauncher
==========

CLI to create a new react app using every tools you love

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/relauncher.svg)](https://npmjs.org/package/relauncher)
[![CircleCI](https://circleci.com/gh/jeremyscatigna/relauncher/tree/master.svg?style=shield)](https://circleci.com/gh/jeremyscatigna/relauncher/tree/master)
[![Codecov](https://codecov.io/gh/jeremyscatigna/relauncher/branch/master/graph/badge.svg)](https://codecov.io/gh/jeremyscatigna/relauncher)
[![Downloads/week](https://img.shields.io/npm/dw/relauncher.svg)](https://npmjs.org/package/relauncher)
[![License](https://img.shields.io/npm/l/relauncher.svg)](https://github.com/jeremyscatigna/relauncher/blob/master/package.json)

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
relauncher/0.0.0 darwin-x64 node-v10.16.0
$ relauncher --help [COMMAND]
USAGE
  $ relauncher COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`relauncher hello [FILE]`](#relauncher-hello-file)
* [`relauncher help [COMMAND]`](#relauncher-help-command)

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

_See code: [src/commands/hello.ts](https://github.com/jeremyscatigna/relauncher/blob/v0.0.0/src/commands/hello.ts)_

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
<!-- commandsstop -->
