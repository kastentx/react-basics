var React = require('react');
var Greeting = require('./Greeting');
var MoodStatement = require('./MoodStatement');

var App = React.createClass({
  render: function() {
    return (
      <div>
      	<Greeting />
      	<MoodStatement />
    	</div>
    );
  }
});

module.exports = App;
