var mcAssets=require("minecraft-assets")("1.8.8");

console.log("https://raw.githubusercontent.com/rom1504/minecraft-assets/master/data/1.8.8/"+mcAssets.getTexture("wheat_seeds")+".png");

console.log(mcAssets.textureContent["wheat_seeds"].texture);