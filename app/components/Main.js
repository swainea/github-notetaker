
var React = require('react');

  //createClass creates a react component for us - there are a couple of different properties we can pass in- one being the render method
  var Main = React.createClass({
    // renders specifies what the UI looks like for a specific element
    // this means that when the componenet gets rendered to the view the following will display
    render: function(){
      return(
        <div>
          Hello Liz
        </div>
      )
    }
  });

//this means that whenever we require main we will get this component
module.exports = Main;
