var React = require('react');
var PropTypes = React.PropTypes;

var SearchResults = React.createClass({

  render: function() {
    var results;
    var result_list = [];
    if (this.props.results){
      if(this.props.results.search_results.length > 0){
        results = this.props.results.search_results
        results.forEach(function (result){
          url = "#/recordings/" + result.id
          var list_item = <li className="result_item" key={result.id}><a href={url}>{result.title}</a></li>;
          result_list.push(list_item);
        });
      }
    }
    return (
      <div className="result_dropdown">
        <ul>
          {result_list}
        </ul>
      </div>
    );
  }

});

module.exports = SearchResults;
