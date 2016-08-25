var React = require('react');

var SecondThing = React.createClass({
	getInitialState : function() {
		return {
			mood : 'excited'
		};
	},
	render : function() {
		return <h2>React is making me so {this.state.mood}!</h2>
	}
});

module.exports = SecondThing;