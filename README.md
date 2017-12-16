# SpriteSheet Unpacker/Cropper script

1. Read [Leshy SpriteSheet Tool Instructions](https://www.leshylabs.com/blog/posts/2013-12-03-Leshy_SpriteSheet_Tool.html) for the hotkeys
2. Drag your packed spritesheet into editor window
3. Use automatic chunks recognition by `Remap` button
4. Process your packed or optimized spritesheet on 
[Leshy SpriteSheet Tool](https://www.leshylabs.com/apps/sstool/)
  - Navigate spritesheet with the right mouse button
  - Use `Shift` to merge several slices into bigger one
  - Edit `name` parameter for each individual sprite slice in the Sprite Settings block or leave it for later steps, after the crop script had finished processing.
5. Run sprite repacking on [Leshy SpriteSheet Tool](https://www.leshylabs.com/apps/sstool/) by pressing `Repack` button
6. Download final repacked spritesheet and put it to crop script folder. Rename it to `spritesheet.png`
7. Select `JSON` config format for the sprite map. Press `Save` button and download final `sprites.json` config. Put it to crop script folder and rename to `sprites.json` if needed.
8. Inside to crop script folder run `npm install` to get Jimp npm package dependency.
9. Run crop script: `node ./crop.js`
10. Open `/out` folder and check ton of smaller unpacked images
11. Open `/out` folder with default MacOS Preview.app application to rotate and save incorrectly rotated images with `Cmd+L`(rotate left) or `Cmd+R`(rotate right).
12. Rename smaller images to something meaningful, not the default `sprite*.png` pattern
 
