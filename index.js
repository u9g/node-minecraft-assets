const mcDataToNode = require('./lib/loader')
const cache = {} // prevent reindexing when requiring multiple time the same version

module.exports = function (mcVersion) {
  if (cache[mcVersion]) { return cache[mcVersion] }
  const mcData = data[mcVersion]
  if (mcData == null) { return null }
  const nmcData = mcDataToNode(mcData, mcVersion)
  cache[mcVersion] = nmcData
  return nmcData
}

const data = {
  '1.8.8': {
    blocksTextures: require('./minecraft-assets/data/1.8.8/blocks_textures'),
    itemsTextures: require('./minecraft-assets/data/1.8.8/items_textures'),
    textureContent: require('./minecraft-assets/data/1.8.8/texture_content')
  },
  1.9: {
    blocksTextures: require('./minecraft-assets/data/1.9/blocks_textures'),
    itemsTextures: require('./minecraft-assets/data/1.9/items_textures'),
    textureContent: require('./minecraft-assets/data/1.9/texture_content')
  },
  '1.10': {
    blocksTextures: require('./minecraft-assets/data/1.10/blocks_textures'),
    itemsTextures: require('./minecraft-assets/data/1.10/items_textures'),
    textureContent: require('./minecraft-assets/data/1.10/texture_content')
  },
  '1.11.2': {
    blocksTextures: require('./minecraft-assets/data/1.11.2/blocks_textures'),
    itemsTextures: require('./minecraft-assets/data/1.11.2/items_textures'),
    textureContent: require('./minecraft-assets/data/1.11.2/texture_content')
  },
  1.12: {
    blocksTextures: require('./minecraft-assets/data/1.12/blocks_textures'),
    itemsTextures: require('./minecraft-assets/data/1.12/items_textures'),
    textureContent: require('./minecraft-assets/data/1.12/texture_content')
  },
  1.13: {
    blocksTextures: require('./minecraft-assets/data/1.13/blocks_textures'),
    itemsTextures: require('./minecraft-assets/data/1.13/items_textures'),
    textureContent: require('./minecraft-assets/data/1.13/texture_content')
  },
  '1.14.4': {
    blocksTextures: require('./minecraft-assets/data/1.14.4/blocks_textures'),
    itemsTextures: require('./minecraft-assets/data/1.14.4/items_textures'),
    textureContent: require('./minecraft-assets/data/1.14.4/texture_content')
  },
  '1.15.2': {
    blocksTextures: require('./minecraft-assets/data/1.15.2/blocks_textures'),
    itemsTextures: require('./minecraft-assets/data/1.15.2/items_textures'),
    textureContent: require('./minecraft-assets/data/1.15.2/texture_content')
  },
  '1.16.1': {
    blocksTextures: require('./minecraft-assets/data/1.16.1/blocks_textures'),
    itemsTextures: require('./minecraft-assets/data/1.16.1/items_textures'),
    textureContent: require('./minecraft-assets/data/1.16.1/texture_content')
  }
}
