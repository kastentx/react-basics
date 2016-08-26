var React = require('react');
var Greeting = require('./Greeting');
var MoodStatement = require('./MoodStatement');

var App = React.createClass({
  getInitialState: function() {
    return {
      color: 'black',
      mood: ' '
    };
  },

  handleChange: function(newMood) {
    var newColor;
    switch (newMood) {
      case 'happy!':
        newColor = 'green';
        break;
      case 'angry!':
        newColor = 'red';
        break;
      case 'excited!':
        newColor = 'yellow';
        break;
      case ' ':
        newColor = 'black';
        break;
    }
    this.setState({
      color: newColor,
      mood: newMood
    });
  },

  render: function() {
    return (
      <div>
        <Greeting color={this.state.color} />
        <MoodStatement onChange={this.handleChange} mood={this.state.mood}/>
      </div>
    );
  }
});

module.exports = App;
