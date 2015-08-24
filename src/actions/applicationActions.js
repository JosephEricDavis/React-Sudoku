'use strict';

var dispatcher = require('../flux/dispatcher');
var actionTypes = require('../flux/constants').actionTypes;

module.exports = {

	initializeApplication: function() {
    dispatcher.dispatch({
      actionType: actionTypes.INITIALIZE_APPLICATION
    });
	},

	gridSquareSelected: function(gridSquare) {
    dispatcher.dispatch({
      actionType: actionTypes.GRID_SQUARE_SELECTED,
      gridSquare: gridSquare
    });
	}

};
