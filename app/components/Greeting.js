var React = require('react');

var Greeting = React.createClass({
  getDefaultProps: function() {
    return { 
    	name: 'World',
    };
  },
  render: function() {
	 	var h1Styles = {
			'color': 'green'
		};
		 	
    return (
    	<h1 style={h1Styles}>Hello {this.props.name}!</h1>
    );
  }
});

module.exports = Greeting;
