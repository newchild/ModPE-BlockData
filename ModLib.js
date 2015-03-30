function IdToName(id){
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
        default:
          return "Not implemented";
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


function getWoolColor(id, dataTag) {
    if (id != 35)
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

function BData(x,y,z){
    this.ID =  Level.getTile(x,y,z);
    this.Data = Level.getData(x,y,z);
    this.Name = IdToName(this.ID);
    this.WoodPlankType = getWoodPlankType(this.ID, this.Data);
    this.WoolColor = getWoolColor(this.ID, this.Data);
}

function useItem(x,y,z){
    var myBlock = new BData(x, y, z);
    if (myBlock.Name.toLowerCase() == "wool")
        clientMessage(myBlock.Name + "->" + myBlock.WoolColor + " so Data is " + myBlock.Data);
    if (myBlock.Name.toLowerCase() == "wooden plank")
        clientMessage(myBlock.Name + "->" + myBlock.WoodPlankType + " so Data is " + myBlock.Data);
    else
        clientMessage(myBlock.Name);
       
}
