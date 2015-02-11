var assert = require('assert');


function Piece(color, name, position){
   //attach properties here
   this.color = color;
   this.name = name;
   this.position = position;
}


Piece.prototype = {
   //attach methods here
    position: function () {
        return this.position;
    },
    color: function () {
        return this.color;
    },
    name: function () {
        return this.name;
    },
    abbrev: function () {
        return this.name.substring(0, 1);
    },
    toSting: function () {
        return.toString
    },
};

it('should have a function called piece', function (){
  assert(Piece);
});

it('should prove that Piece is a function', function () {
    assert(typeof Piece == "function");
});

it('should define what color is', function () {
    assert(typeof "color" == "string");
});

//it('should', function () {
//    
//});


//function pieceMaker {
//   //given color white or black
//   //given name of piece
//   //when
//   //then
//}
//
//function Piece(color, name, position){
//   //attach properties here
//   this.color = color;
//   this.name name;
//   this.position = position;
//}
//
//Piece.prototype = {
//   //attach methods here
//   getName: function() {
//       return this.name;
//   getFullName = {
//       return this.color + " " + this.name;
//   }
//   }
//};
//
//function Rook(color, queenside) {
//   Piece.call(this, color, 'rook', position);
//}
//
//Rook.prototype = new Piece();