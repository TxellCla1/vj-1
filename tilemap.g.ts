// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010100010000000000010001000000000101000101010101000100000101010001010000000000000000000000000100010100010100010101010100000101000101000101000100000000000000000000000001000001000101010000010101010000010000010001000100010101010100000100010101010000000100010101000100000000010101010101000000000001010101000100000001010100010100000000010101000100010201000001000000000101010001000101010100010001010000000000010001000100000100010101000101000100010001000101010101010001010001000100000000000000000101010101010301`, img`
2 2 2 2 2 2 . 2 . . . . . 2 . 2 
. . . . 2 2 . 2 2 2 2 2 . 2 . . 
2 2 2 . 2 2 . . . . . . . . . . 
. . 2 . 2 2 . 2 2 . 2 2 2 2 2 . 
. 2 2 . 2 2 . 2 2 . 2 . . . . . 
. . . . . . . 2 . . 2 . 2 2 2 . 
. 2 2 2 2 . . 2 . . 2 . 2 . 2 . 
2 2 2 2 2 . . 2 . 2 2 2 2 . . . 
2 . 2 2 2 . 2 . . . . 2 2 2 2 2 
2 . . . . . 2 2 2 2 . 2 . . . 2 
2 2 . 2 2 . . . . 2 2 2 . 2 . 2 
2 2 . . 2 . . . . 2 2 2 . 2 . 2 
2 2 2 . 2 . 2 2 . . . . . 2 . 2 
. 2 . . 2 . 2 2 2 . 2 2 . 2 . 2 
. 2 . 2 2 2 2 2 2 . 2 2 . 2 . 2 
. . . . . . . . 2 2 2 2 2 2 . 2 
`, [myTiles.transparency16,sprites.swamp.swampTile1,sprites.swamp.swampTile0,sprites.dungeon.collectibleRedCrystal], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
