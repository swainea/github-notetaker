// this is the instruction sheet for our router so our router knows what components to render
var React = require('react');
var Main = require('../components/Main');
var Home = require('../components/Home');
var Profile = require('../components/Profile');
var Router = require('react-router');
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;

module.exports = (
  // this means that whenever someone is at the home index we will render the Main component
  <Route path="/" component={Main}>
    // IndexRoute says: activate this if none of our other routes match AKA our default path
    <IndexRoute component={Home} />
    // Profile component rendered when user hits this path
    <Route path="profile/:username" component={Profile} />
  </Route>
);
