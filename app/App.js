// this file is handling our routing
var React = require('react');
// we are requiring reactDOM because this file will be in charge of rendering
var ReactDOM = require('react-dom');
// we are requiring react-router because this file will be in charge of routing
// react-router is going to return an object and we want .Router to be a property on that object
var Router = require('react-router').Router;
var routes = require('./config/routes');

ReactDOM.render(
  //instead of passing in a component we are going to pass in our Router
  // routes is an instruction sheet for Router
  <Router>{routes}</Router>,
  document.getElementById('app')
);
