const fs=require("fs");

module.exports=mcDataToNode;

function mcDataToNode(mcData,mcVersion) {
  var indexes=require("./indexes.js")(mcData);
  function findItemOrBlockByName(name) {
    var item = indexes.itemsByName[name];
    if (item !== undefined) return item;
    return indexes.blocksByName[name];
  }
  function getTexture(name) {
    return findItemOrBlockByName(name).texture;
  }
  return {
    blocks: indexes.blocksByName,
    blocksArray: mcData.blocksTextures,

    items: indexes.itemsByName,
    itemsArray: mcData.itemsTextures,

    textureContent: indexes.textureContentByName,
    textureContentArray: mcData.textureContent,

    findItemOrBlockByName:findItemOrBlockByName,
    getTexture:getTexture,

    getImageContent: function(name) {
      const texture=getTexture(name);
      if(texture==null)
        return null;
      return "data:image/png;base64,"+fs.readFileSync(__dirname+"/../minecraft-assets/data/"+mcVersion+"/"+texture+".png","base64");
    }
  };
}