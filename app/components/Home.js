var React = require('react');

var Home = React.createClass({
  render: function(){
    return (
      // class is a reserved word in JS so we use className
      <h2 className="text-center">
        Search by Github Username Above
      </h2>
    );
  }
})
