

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

var directions = {
  "n":  new Square( 0, -1),
  "ne": new Square( 1, -1),
  "e":  new Square( 1,  0),
  "se": new Square( 1,  1),
  "s":  new Square( 0,  1),
  "sw": new Square(-1,  1),
  "w":  new Square(-1,  0),
  "nw": new Square(-1, -1)
};

var randomElement = function( array ) {
  return array[ Math.floor(Math.random * array.length)];
};

var directionNames = "n ne e se s sw w nw".split(" ");

var BouncingCritter = function() {
  this.direction = randomElement(directionNames);
};

BouncingCritter.prototype.act = function(view) {
  return { type: "move", direction: this.direction };
};

var elementFromChar = function( legend, ch ) {
  if (ch === " ") return null;
  var element = new legend[ch]();
  element.originCh = ch;
  return element;
};

var World = function(plan, legend) {
  var grid = new Grid( plan[0].length, plan.length );
  
  plan.forEach( function( row, rowIndex ){
    for (var x = 0; x < row.length; x++ ) {
      grid.set( new Square(x, rowIndex), elementFromChar(legend, row[x]) )
    }
  });

  this.grid = grid;
  this.legend = legend;
};

World.prototype.toString = function() {
  var ret_str = "";
  for (var y = 0; y < this.grid.height; y++ ){
    for (var x = 0; x < this.grid.width; x++ ){
      ret_str += charFromElement( this.grid.get( new Square(x, y) ));
    }
    ret_str += "\n";
  }
  return ret_str;
};

var charFromElement = function( element ) {
  if (element === null) return " ";
  else return element.originCh;
};

var Wall = function() {};

var world = new World( plan, 
  {
    "#": Wall,
    "o": BouncingCritter
  }
);

console.log( world.toString() );







