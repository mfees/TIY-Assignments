var assert = require('assert');
var _ = require('lodash');

function print(board){
                
  // Before any rows are printed, print the `<table>`...
  console.log('<table class="chessboard">');

  _.forEach(board, function(row, key){
      
      console.log(row);

      //console.log('<tr class="row">');
      // Before any cells are printed...

      _.forEach(row, function(square, k){
          
          //console.log('<td class="square"></td>');
          
          // In here, we have `rank`, `file`, and `square`...

      }); // END foreach(row)
      
      //console.log('</tr>');
      // After all the cells are printed...

  }); // END foreach(board)

  // After all the rows are printed...
  console.log('</table> <!-- .chessboard -->');
} // END print


var board = {
    'row1': {
        'square1': 'square1',
        'square2': 'square2',
        'square3': 'square3',
        'square4': 'square4',
        'square5': 'square5',
        'square6': 'square6',
        'square7': 'square7',
        'square8': 'square8',
    },
    'row2': 'two',
    'row3': 'three',
    'row4': 'four',
    'row5': 'five',
    'row6': 'six',
    'row7': 'seven',
    'row8': 'eight'
};



print(board);


//var func = function(value, key){ 
//    console.log(value);
//}
//
//
//
//_.forEach(theBoard, func);


























//function print(board){
//                
//  // Before any rows are printed, print the `<table>`...
//  console.log('<table class="chessboard">');
//
//  _.forEach(board, function(row, rank){
//      
//      console.log('<tr class="row">');
//      // Before any cells are printed...
//
//      _.forEach(row, function(square, file){
//
//          // In here, we have `rank`, `file`, and `square`...
//
//      }); // END foreach(row)
//      
//      console.log('</tr>');
//      // After all the cells are printed...
//
//  }); // END foreach(board)
//
//  // After all the rows are printed...
//  console.log('</table> <!-- .chessboard -->');
//} // END print






var row = [
[ [], [], [], [], [], [], [], [] ],
[ [], [], [], [], [], [], [], [] ],
[ [], [], [], [], [], [], [], [] ],
[ [], [], [], [], [], [], [], [] ],
[ [], [], [], [], [], [], [], [] ],
[ [], [], [], [], [], [], [], [] ],
[ [], [], [], [], [], [], [], [] ],
[ [], [], [], [], [], [], [], [] ]
]


//for (var i = 0; i < 8; i++) {
//    board.push(row);
//}
//
//console.log();

//var board = [
//    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
//    ['P', 'P', 'P', 'P',  'P', 'P', 'P', 'P'],
//    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',],
//    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',],
//    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',],
//    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',],
//    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p',],
//    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'] ];
//
//console.log(board.join('\n') + '\n\n');
//
//
//// Move King's Pawn forward 2
//board[4][4] = board[6][4];
//board[6][4] = ' ';
//console.log(board.join('\n') + '\n\n');
//
//
//
//// Trying to move something- WOOHOO!
//board[2][2] = board[1][1];
//board[1][1] = ' ';
//console.log(board.join('\n') + '\n\n');
//
//
//
//// Move lowercase n forward 3 and left 1
//board[4][5] = board[7][6];
//board[7][6] = ' ';
//console.log(board.join('\n') + '\n\n');
//
//
//// Move uppercase R down 2 and left 4
//board[2][3] = board[0][7];
//board[0][7] = ' ';
//console.log(board.join('\n') + '\n\n');

    