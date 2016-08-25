var React = require('react');
var PickerBox = require('./PickerBox');

var MoodStatement = React.createClass({
  getInitialState: function() {
    return {
      mood: ' '
    };
  },
  getDefaultProps: function() {
    return {
      thing: 'React'
    };
  },
  changeMood: function(newMood) {
    this.setState({
      mood: newMood
    });
  },
  render: function() {
    var h2Styles = {
      float: 'left'
    };

    return (
      <div>
      	<h2 style={h2Styles}>{this.props.thing} is making me so </h2><PickerBox mood={this.state.mood} onChange={this.changeMood}/>
      </div>
    );
  }
});

module.exports = MoodStatement;
