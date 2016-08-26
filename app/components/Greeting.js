var React = require('react');

var Greeting = React.createClass({
  getDefaultProps: function() {
    return { 
    	name: 'World',
      color: 'black'
    };
  },
  
  render: function() {
	 	var h1Styles = {
	 		'color': this.props.color
	 	};
		 	
    return (
    	<h1 style={h1Styles}>Hello {this.props.name}!</h1>
    );
  }
});

module.exports = Greeting;
