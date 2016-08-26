var React = require('react');

var PickerBox = React.createClass({
  getDefaultProps: function() {
    return {
      mood: ' '
    }
  },

  handleChange: function(e) {
    var mood = e.target.value;
    this.props.onChange(mood);
  },

  render: function() {
    var pickerStyles = {
      'display': 'inline',
      'cursor': 'pointer',
      'margin-left': '.5em',
      'margin-top': '2em'
    };
    
    return (
    	<div>
        <select id='mood-choices' onChange={this.handleChange} style={pickerStyles} value={this.props.mood}>
            <option value=' '>
            </option>    
            <option value='happy!'>
              happy!
            </option>
            <option value='angry!'>
              angry!
            </option>
            <option value='excited!'>
              excited!
            </option>
        </select>
      </div>
    );
  }
});

module.exports = PickerBox;