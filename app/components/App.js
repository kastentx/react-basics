var React = require('react');
var Greeting = require('./Greeting');
var MoodStatement = require('./MoodStatement');

var App = React.createClass({
	getInitialState: function() {
		return {color: 'black'};
	},

	setGreetColor: function(mood) {
    var newColor;

    switch(mood) {
      case 'happy':
        newColor = 'green';
        break;
      case 'angry':
        newColor = 'red';
        break;
      case 'excited':
        newColor = 'yellow';
        break;
    }
		this.setState({
			color: newColor
		});
	},

  render: function() {
    return (
      <div>
      	<Greeting color={this.state.color} />
      	<MoodStatement onChange={this.setGreetColor}/>
    	</div>
    );
  }
});

module.exports = App;
