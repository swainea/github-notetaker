var React = require('react');

  //createClass creates a react component for us - there are a couple of different properties we can pass in- one being the render method
  var Main = React.createClass({
    // renders specifies what the UI looks like for a specific element
    // this means that when the componenet gets rendered to the view the following will display
    render: function(){
      return(
        <div className="main-container">
           <nav className="navbar navbar-default" role="navigation">
             <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
               MENU
             </div>
           </nav>
           <div className="container">
             {this.props.children}
           </div>
         </div>
      )
    }
  });

//this means that whenever we require main we will get this component
module.exports = Main;
