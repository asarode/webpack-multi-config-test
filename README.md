# Demo for Multi Config from CLI [#2835](https://github.com/webpack/webpack/issues/2835)
Clone this repo and setup a build of webpack that treats multiple `--config`
flags the same as exporting an array of configs in your webpack.config.js file.

### Test multiple config flags
```
webpack --config "1-config.js" --config "2-config.js"
```

### Test array of configs in config export
```
webpack
```

### Test single config flag
```
webpack --config "2-config.js"
```
