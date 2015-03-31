/*
Note for developers:
Facing Direction is VERY incomplete right now.
*/

var Facing = {
    South: 0,
    SouthSouthWest: 1,
    SouthWest: 2,
    WestSouthWest: 3,
    West: 4,
    WestNorthWest: 5,
    NorthWest: 6,
    NorthNorthWest: 7,
    North: 8,
    NorthNorthEast: 9,
    NorthEast: 10,
    EastNorthEast: 11,
    East: 12,
    EastSouthEast: 13,
    SouthEast: 14,
    SouthSouthEast: 15,
    Up: 16,
    Down: 17
};

function isHead(id, dataTag) {
    if (id != 26)
        return null;
    if (dataTag > 8) {
        return true
    }
    return false;
}

function IdToName(id) {
    switch(id){
        case 0:
          return "Air";
        case 1:
          return "Stone";
        case 2:
          return "Grass";
        case 3:
          return "Dirt";
        case 4:
          return "Cobblestone";
        case 5:
          return "Wooden Plank";
        case 6:
            return "Sappling";
        case 7:
            return "Bedrock";
        case 8:
            return "Water";
        case 9:
            return "Water";
        case 10:
            return "Lava";
        case 11:
            return "Lava";
        case 12:
            return "Sand";
        case 13:
            return "Gravel";
        case 14:
            return "Gold Ore";
        case 15:
            return "Iron Ore";
        case 16:
            return "Coal Ore";
        case 17:
            return "Wood";
        case 18:
            return "Leaves";
        case 19:
            return "Sponge";
        case 20:
            return "Glass";
        case 21:
            return "Lapis Lazuli Ore";
        case 22:
            return "Lapis Lazuli Block";
        case 24:
            return "Sandstone";
        case 26:
            return "Bed";
        case 27:
            return "Powered Rail";
        case 30:
            return "Cobweb";
        case 31:
            return "Tall Grass";
        case 32:
            return "Dead Bush";
        case 35:
            return "Wool";
        case 37:
            return "Dandelion";
        case 38:
            return "Poppy";
        case 39:
            return "Brown Mushroom";
        case 40:
            return "Red Mushroom";
        case 41:
            return "Gold Block";
        case 42:
            return "Iron Ore";
        case 43:
            return "Double Stone Slab";
        case 44:
            return "Slab";
        case 45:
            return "Brick Block";
        case 46:
            return "TNT";
        case 47:
            return "Bookshelf";
        case 48:
            return "Moss Stone";
        case 49:
            return "Obsidian";
        case 50:
            return "Torch";
        case 51:
            return "Fire";
        case 52:
            return "Monster Spawner";
        case 53:
            return "Oak Wood Stairs";
        case 54:
            return "Chest";
        case 56:
            return "Diamond Ore";
        case 57:
            return "Diamond Block";
        case 58:
            return "Crafting Table";
        case 59:
            return "Wheat";
        case 60:
            return "Farmland";
        case 61:
            return "Furnace";
        case 62:
            return "Furnace";
        case 63:
            return "Sign";
        case 64:
            return "Wooden Door";
        case 65:
            return "Ladder";
        case 66:
            return "Rail";
        case 67:
            return "Cobblestone Stairs";
        case 68:
            return "Sign"; //Sign at Wall still a sign :S
        case 71:
            return "Iron Door";
        case 73:
            return "Redstone Ore";
        case 74:
            return "Redstone Ore"; //Glowing
        case 78:
            return "Snow"; //Snow Cover
        case 79:
            return "Ice";
        case 80:
            return "Snow"; 
        case 81:
            return "Cactus";
        case 82:
            return "Clay";
        case 83:
            return "Sugarcane";
        case 85:
            return "Fence";
        case 86:
            return "Pumpkin";
        case 87:
            return "Netherrack";
        case 89:
            return "Glowstone";
        case 91:
            return "Jack o'Lantern";
        case 92:
            return "Cake";
        case 95:
            return "Invisible Bedrock";
        case 96:
            return "Trapdoor";
        case 98:
            return "Stone Brick";//0 Stone brick 1 Mossy stone brick 2 Cracked stone brick 3 Chiseled stone brick
        case 99:
            return "Brown Mushroom Block"; //To add: Position
        case 100:
            return "Red Mushroom Block";
        case 101:
            return "Iron Bars"; //State
        case 102:
            return "Glass Pane";
        case 103:
            return "Melon";
        case 104:
            return "Pumpkin Stem";
        case 105:
            return "Melon Stem";
        case 106:
            return "Vines"; // Facing
        case 107:
            return "Fence Gates";
        case 108:
            return "Brick Stairs";
        case 109:
            return "Stone Brick Stairs";
        case 110:
            return "Mycelium";
        case 111:
            return "Lily Pad";
        case 112:
            return "Nether Brick";
        case 114:
            return "Nether Brick Stairs";
        case 120:
            return "Ender Portal Frame";
        case 121:
            return "End Stone";
        case 127:
            return "Cocoa";
        case 128:
            return "Sandstone Stairs";
        case 129:
            return "Emerald Ore";
        case 133:
            return "Emerald Block";
        case 134:
            return "Spruce Wood Stairs";
        case 135:
            return "Brich Wood Stairs";
        case 136:
            return "Jungle Wood Stairs";
        case 139:
            return "Cobblestone Wall";
        case 141:
            return "Carrots";
        case 142:
            return "Potato";
        case 155:
            return "Block of Quartz";
        case 156:
            return "Quartz Stairs";
        case 157:
            return "Wooden Double Slab";
        case 158:
            return "Wooden Slab";
        case 159:
            return "Stained Clay";
        case 163:
            return "Acacia Wood Stairs";
        case 164:
            return "Dark Oak Wood Stairs";
        case 170:
            return "Hay Block";
        case 171:
            return "Carpet";
        case 172:
            return "Hardened Clay";
        case 173:
            return "Block of Coal";
        case 174:
            return "Packed Ice";
        case 175:
            return "Huge Plant";
        case 243:
            return "Podzol";
        case 244:
            return "Beetroot";
        case 245:
            return "Stone Cutter";
        case 246:
            return "Glowing Obsidian";
        case 247:
            return "Nether Reactor Core";
        case 248:
            return "Update Game Block";
        case 249:
            return "Update Game Block";
        default:
          return "Update BData";
    }
     
}

function getWoodPlankType(id,dataTag) {
    if (id != 5)
        return null;
    switch (dataTag) {
        case 0:
            return "Oak";
        case 1:
            return "Spruce";
        case 2:
            return "Birch";
        case 3:
            return "Jungle";
        case 4:
            return "Acacia";
        case 5:
            return "Dark Oak";
        default:
            return null;

    }
}

function getSlabTile(id, dataTag) {
    if (id != 44)
        return null;
    if (dataTag > 7)
        dataTag = dataTag - 8;
    switch (dataTag) {
        case 0:
            return "Stone";
        case 1:
            return "Sandstone";
        case 2:
            return "Wooden";
        case 3:
            return "Cobblestone";
        case 4:
            return "Bricks";
        case 5:
            return "Stone Brick";
        case 6:
            return "Nether Brick";
        case 7:
            return "Quartz";
    }
}

function getWoolColor(id, dataTag) {
    if (id != 35 && id != 171)
        return null;
    switch (dataTag) {
        case 0:
            return "White";
        case 1:
            return "Orange";
        case 2:
            return "Magenta";
        case 3:
            return "Light Blue";
        case 4:
            return "Yellow";
        case 5:
            return "Lime";
        case 6:
            return "Pink";
        case 7:
            return "Grey";
        case 8:
            return "Light Grey";
        case 9:
            return "Cyan";
        case 10:
            return "Purple";
        case 11:
            return "Blue";
        case 12:
            return "Brown";
        case 13:
            return "Green";
        case 14:
            return "Red";
        case 15:
            return "Black";
    }

}

function FurnaceIsMelting(id){
    if(id == 61)
        return false;
    if(id == 62)
        return true;
    return null;
}

function getFacingDirection(id, dataTag) {
    switch (id) {
        case 50:
            switch (dataTag) {
                case 1:
                    return Facing.East;
                case 2:
                    return Facing.West;
                case 3:
                    return Facing.South;
                case 4:
                    return Facing.North;
                default:
                    return Facing.Up;
            }
        case 44:
            if (dataTag > 7)
                return Facing.Down;
            else
                return Facing.Up;
        case 26:
            if (dataTag == 0 || dataTag == 8)
                return Facing.South;
            if (dataTag == 1 || dataTag == 9)
                return Facing.West;
            if (dataTag == 2 || dataTag == 10)
                return Facing.North;
            if (dataTag == 3 || dataTag == 11)
                return Facing.East;
        default:
            return null;
        
    }
}

function isAttachedToWall(id,dataTag){
    switch(id){
        case 50:
            if(dataTag < 5)
                return true;
            return false;
        case 68:
            return true;
        case 63:
            return false;
        default:
            return null;
    }
}

function isMature(id, dataTag) {
    switch (id) {
        case 59:
            if (dataTag == 7)
                return true;
            else
                return false;
        case 141:
            if (dataTag == 7)
                return true;
            else
                return false;
        case 142:
            if (dataTag == 7)
                return true;
            else
                return false;
        case 104:
            if (dataTag == 7)
                return true;
            else
                return false;
        case 105:
            if (dataTag == 7)
                return true;
            else
                return false;
        default:
            return null;
    }
}

function getSnowLayerCount(id, dataTag){
    if(id == 78){
        return dataTag;
    }
    return null;
}

function getCoreState(id, dataTag){
    if(id != 247)
        return null;
    switch(dataTag){
        case 0:
            return "Unused";
        case 1:
            return "Active";
        case 2:
            return "Used";
    }
}

function isLiquid(id) {
    if (id == 8 || id == 10)
        return true;
    return false;
}

function isDangerous(id){
    if (id == 10 || id == 11 || id == 81 || id == 51)
        return true;
    return false;
}

function getPlantKind(id, dataTag){
    if(id == 31){
        switch(dataTag){
            case 0:
                return "Shrub";
            case 1:
                return "Tall Grass";
            case 2:
                return "Fern";
        }
    }
    if(id == 175){
        switch(dataTag){
            case 0:
                return "Sunflower";
            case 1:
                return "Lilac";
            case 2:
                return "Grass";
            case 3:
                return "Fern";
            case 4:
                return "Rose Bush";
            case 5:
                return "Peony"; 
        }
        
    }
    return null;
}

function BData(x,y,z){
    this.ID =  Level.getTile(x,y,z);
    this.Data = Level.getData(x,y,z);
    this.Name = IdToName(this.ID);
    this.WoodPlankType = getWoodPlankType(this.ID, this.Data);
    this.Color = getWoolColor(this.ID, this.Data);
    this.isMature = isMature(this.ID,this.Data);
    this.isMelting = FurnaceIsMelting(this.ID);
    this.FacingDirection = getFacingDirection(this.ID, this.Data);
    this.IsAttachedToWall = isAttachedToWall(this.ID, this.Data);
    this.SlabKind = getSlabTile(this.ID, this.Data);
    this.isLiquid = isLiquid(this.ID);
    this.LayerCount = getSnowLayerCount(this.ID, this.Data);
    this.NetherCoreState = getCoreState(this.ID, this.Data);
    this.isDangerous = isDangerous(this.ID);
    this.PlantKind = getPlantKind(this.ID, this.Data);
    this.isBedHead = isHead(this.ID, this.Data);
}
