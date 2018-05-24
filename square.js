function Shape(){
}

Shape.prototype.X=0;
Shape.prototype.Y=0;

Shape.prototype.move = function (x,y) {
  this.X=x;
  this.Y=y;
};

Shape.prototype.distance_from_origin = function () {
  return Math.sqrt(this.X*this.X + this.Y*this.Y);
};

Shape.prototype.area = function () {
  throw new Error("Need a 2nd form");
};

function Square(){
}

Square.prototype = new Shape();
Square.prototype.__proto__ = Shape.prototype;
Square.prototype.Width=0;

Square.prototype.area = function () {
  return this.Width * this.Width;
};


var sq = new Square();
sq.move(5,5);
sq.Width=15;
console.log(sq.distance_from_origin());
console.log(sq.area());
