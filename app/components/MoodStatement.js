var React = require('react');
var PickerBox = require('./PickerBox');

var MoodStatement = React.createClass({
  getDefaultProps: function() {
    return {
      thing: 'React',
      mood: ' '
    };
  },

  handleChange: function(newMood) {
    this.props.onChange(newMood);
  },

  render: function() {
    var h2Styles = {
      float: 'left'
    };

    return (
      <div>
      	<h2 style={h2Styles}>{this.props.thing} is making me so </h2><PickerBox onChange={this.handleChange} mood={this.props.mood}/>
      </div>
    );
  }
});

module.exports = MoodStatement;
