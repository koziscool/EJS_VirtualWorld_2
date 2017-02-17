

var plan = ["############################",
            "#      #    #      o      ##",
            "#                          #",
            "#          #####           #",
            "##         #   #    ##     #",
            "###           ##     #     #",
            "#           ###      #     #",
            "#   ####                   #",
            "#   ##       o             #",
            "# o  #         o       ### #",
            "#    #                     #",
            "############################"];

var Square = function(x, y)             {
  this.x = x;
  this.y = y;
};

Square.prototype.plus = function( other ) {

}

var Grid = function(width, height){
  this.space = new Array( width * height );
  this.width = width;
  this.height = height;
};

Grid.prototype.isInside = function( square ) {
  return square.x >= 0 && square.x < this.width &&
    square.y >= 0 && square.y < this.height;
};

Grid.prototype.get = function( square){
  return this.space[ this.width * square.x + square.y ];
};

Grid.prototype.set = function( square, value ){
  this.space[ this.width * square.x + square.y ] = value;
};












