'use strict';

var React = require('react');

var GridSquare = React.createClass({
  propTypes: {
    squareData: React.PropTypes.object.isRequired
  },
  composeStyles: function () {
    var styles = {
      display: 'inline-block',
      backgroundColor: '#E9E9E9',
      fontWeight: 'bold',
      padding: '10px',
      fontSize: '24px',
      width: '50px',
      height: '50px',
      textAlign: 'center',
      boxSizing: 'border-box',
      fontFamily: 'verdana'
    };
    var index = this.props.squareData.index;
    if ((index >= 27 && index <= 35) || (index >= 54 && index <= 62)) {
      styles.marginTop = '5px';
    }
    if (((index + 1) % 3 === 0) && ((index + 1) % 9 !== 0)) {
      styles.marginRight = '5px';
    }
    return styles;
  },
  render: function () {
    return (
      <div style={this.composeStyles()}>
        {this.props.squareData.number}
      </div>
    );
  }
});

module.exports = GridSquare;
