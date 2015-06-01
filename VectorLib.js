function Vector3(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.Distance = function (vector2) {
        var deltax = this.x - vector2.x;
        var deltaz = this.z - vector2.z;
        var deltay = this.y - vector2.y;
        var distance = Math.sqrt(deltax * deltax + deltay* deltay + deltaz * deltaz);
        return distance;
    }
    this.updatePosition = function (x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    this.getDistanceVector = function (vector) {
        return new Vector3(this.x - vector.x, this.y - vector.y, this.z - vector.z);
    }
    this.moveAlongPoint = function (otherVector, factor) {
        var distanceVector = this.getDistanceVector(otherVector);
        var newPoint = new Vector3(distanceVector.x * factor + this.x, distanceVector.y * factor + this.y, distanceVector.z * factor + this.z);
        return newPoint;
    }

    this.getNormalizedVector = function(){
        return new Vector3((this.x / this.getLength()), (this.y / this.getLength()), (this.z / this.getLength()))
    }

    this.getLength = function(){
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2));
    }
    this.add = function(vector){
        return new Vector3(this.x + vector.x, this.y + vector.y, this.z + vector.z);
    }

    this.multiplyWithNumber = function (num) {
        return new Vector3(this.x * num, this.y * num, this.z * num);
    }

    this.moveAlongDirectionalVector = function(dirvector, distance){
        var normalizedVector = dirvector.getNormalizedVector();
        return this.add(normalizedVector.multiplyWithNumber(distance));
    }

    this.getYAngle = function(){
        var scalarprod = (this.y)/(this.getLength()*(new Vector3(0,1,0)).getLength());
        return Math.acos(scalarprod);
    }
    this.compare = function (vector) {
        if (Math.round(this.x) == Math.round(vector.x) && Math.round(this.y) == Math.round(vector.y) && Math.round(this.z) == Math.round(vector.z))
            return true;
        return false;
    }
}

function VectorMathMCPE() {
    this.getDirectionalVectorFromEntity = function(ent){
        var mathPitch = ((Entity.getPitch(ent) + 90) * Math.PI) / 180;
        var mathYaw  = ((Entity.getYaw(ent) + 90)  * Math.PI) / 180;
        return new Vector3((Math.sin(mathPitch) * Math.cos(mathYaw)), (Math.cos(mathPitch)), (Math.sin(mathPitch) * Math.sin(mathYaw)));
    }
    this.extendPlayerFacing = function (distance) {
        var dirVector = this.getDirectionalVectorFromEntity(Player.getEntity());
        var playerPos = new Vector3(Player.getX(), Player.getY(), Player.getZ());
        var newPosition = playerPos.moveAlongDirectionalVector(dirVector, distance);
        return newPosition;
    }
}

function VectorLib() {
    this.setTile = function (vector, id, data) {
        Level.setTile(vector.x, vector.y, vector.z, id, data);
    }
    this.setPlayerPos = function(position){
        Entity.setPosition(Player.getEntity(), position.x, position.y, position.z);
    }
}
