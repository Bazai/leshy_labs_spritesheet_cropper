const Jimp = require("jimp");
const fs = require("fs");
const spriteFilename = "spritesheet.png";

const spriteJSON = JSON.parse(fs.readFileSync('sprites.json', 'utf8'));
spriteJSON.map(({x, y, width, height, name}) => {
  Jimp.read(spriteFilename, (err, img) => {
    if (err) throw err;
    img.crop(x, y, width, height)
       .write(`out/${name}.png`); 
  });
});

