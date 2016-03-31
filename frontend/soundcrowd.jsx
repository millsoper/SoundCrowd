var React = require('react'),
    ReactDOM = require('react-dom'),
    Router = require('react-router').Router,
    HashHistory = require('react-router').hashHistory,
    Route = require('react-router').Route,
    IndexRoute = require('react-router').IndexRoute,
    RecordingForm = require('./components/recording-form.jsx'),
    RecordingIndex = require('./components/index'),
    Recording = require('./components/recording.jsx'),
    Index = require('./components/index.jsx'),
    RecordingShow = require('./components/recording-show.jsx'),
    Home = require('./components/home.jsx'),
    UserShow = require('./components/user-show.jsx'),
    App = React.createClass({
      render: function(){
        return (
            <div className="content group">
              {this.props.children}
            </div>
        );
      }
    });


    var routes = (
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
          <Route path="recordings/new" component={RecordingForm}/>
          <Route path="recordings" component={RecordingIndex}/>
          <Route path="recordings/:recordingId" component={RecordingShow}/>
          <Route path="users/:userId" component={UserShow}/>
      </Route>
    );


    document.addEventListener("DOMContentLoaded", function () {
      ReactDOM.render(
        <Router history={ HashHistory }>{routes}</Router>,
        document.getElementById('root')
      );
    });
