# node-minecraft-assets
[![NPM version](https://badge.fury.io/js/minecraft-data.svg)](http://badge.fury.io/js/minecraft-assets)
[![Tonic](https://img.shields.io/badge/tonic-try%20it-blue.svg)](https://tonicdev.com/npm/minecraft-assets)

Provide easy access to [minecraft-assets](https://github.com/rom1504/minecraft-assets) in node.js

## Example

```js
var mcAssets=require("minecraft-assets")("1.8.8");

console.log("https://raw.githubusercontent.com/rom1504/minecraft-assets/master/data/1.8.8/"+mcAssets.getTexture("wheat_seeds")+".png");

console.log(mcAssets.textureContent["wheat_seeds"].texture);
```

## Documentation

 * See [doc/api.md](doc/api.md)
 * See [doc/history.md](doc/history.md)
 