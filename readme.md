# symlink-cli

This command-line app exists because I can never remember the argument order for `ln -s` (the order isn't even consistent between different flavors of \*nix!), and the words on the man page are so ambiguous they don't even help

## Install

```sh
npm i -g symlink-cli
```

## Usage

```sh
symlink [existing file] [new symlink that points at that file]
```

### To see the instructions because you still can't remember the order

```sh
symlink
# prints: symlink [existing file] [new symlink that points at that file]
```

## License

[WTFPL](http://wtfpl2.com)
