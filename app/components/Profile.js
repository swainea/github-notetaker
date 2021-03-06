var React = require('react');
var Router = require('react-router');
var Repos = require('./Github/Repos');
var UserProfile = require('./Github/UserProfile');
var Notes = require('./Notes/Notes');
var ReactFireMixin = require('reactfire');

var Profile = React.createClass({
  mixins: [ReactFireMixin],
  getInitialState: function (){
    return {
      notes: [1,2,3],
      bio: {
        name: 'Liz Swain'
      },
      repos: ['a', 'b', 'c']
    }
  },

  //called after the component mounts the view
  componentDidMount: function (){
    // creating a new instance of firebase and passing it the url of where our prj is located
    this.ref = new Firebase('');
  }
  render: function (){
    console.log(this.props);
    return(
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={this.props.params.username} bio={this.state.bio}/>
        </div>
        <div className="col-md-4">
          <Repos repos={this.state.repos}/>
        </div>
        <div className="col-md-4">
          <Notes notes={this.state.notes}/>
        </div>
      </div>
    )
  }
});

module.exports = Profile;
