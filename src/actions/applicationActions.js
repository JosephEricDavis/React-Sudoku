'use strict';

var dispatcher = require('../flux/dispatcher');
var actionTypes = require('../flux/constants').actionTypes;

module.exports = {

	initializeApplication: function () {
    dispatcher.dispatch({
      actionType: actionTypes.INITIALIZE_APPLICATION
    });
	},

  initializeSudokuData: function (sudokuData) {
    dispatcher.dispatch({
      actionType: actionTypes.INITIALIZE_SUDOKU_DATA,
      sudokuData: sudokuData
    });
  },

	gridSquareSelected: function (gridSquare) {
    dispatcher.dispatch({
      actionType: actionTypes.SELECT_GRID_SQUARE,
      gridSquare: gridSquare
    });
	}

};
