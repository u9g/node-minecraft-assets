var mcDataToNode=require("./lib/loader");
var cache={}; // prevent reindexing when requiring multiple time the same version


module.exports = function(mcVersion)
{
  if(cache[mcVersion])
    return cache[mcVersion];
  var mcData=data[mcVersion];
  if(mcData==null)
    return null;
  var nmcData=mcDataToNode(mcData,mcVersion);
  cache[mcVersion]=nmcData;
  return nmcData;
};

var data={
  "1.8.8":{
    blocksTextures:require("./minecraft-assets/data/1.8.8/blocks_textures"),
    itemsTextures:require("./minecraft-assets/data/1.8.8/items_textures")
  },
  "1.9":{
    blocksTextures:require("./minecraft-assets/data/1.9/blocks_textures"),
    itemsTextures:require("./minecraft-assets/data/1.9/items_textures")
  }
};