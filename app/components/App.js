var React = require('react');
var SecondThing = require('./SecondThing');

var App = React.createClass({
    render: function() {
        return (
        	<div>
	        	<h1>HELLO WORLD</h1>
	        	<SecondThing />
        	</div>	
        )
    }
});

module.exports = App;
