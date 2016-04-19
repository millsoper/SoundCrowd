var Store = require('flux/utils').Store,
    SearchConstants = require('../constants/search_constants'),
    AppDispatcher = require('../dispatcher/dispatcher');

  var SearchResultsStore = new Store(AppDispatcher);

  var _searchStatus = false;
  var _searchResults = [];

  var resetSearchResults = function(searchResults){
    _searchResults = searchResults;
  };

  SearchResultsStore.isSearching = function () {
    return _searchStatus;
  };

  SearchResultsStore.all = function (){
    return _searchResults;
  }

  SearchResultsStore.__onDispatch = function (payload) {
    switch (payload.actionType) {
      case SearchConstants.SEARCH_RESULTS_RECEIVED:
        resetSearchResults(payload.searchResults);
        SearchResultsStore.__emitChange();
        break;
      case SearchConstants.SEARCH_INITIATED:
        _searchStatus = true;
        SearchResultsStore.__emitChange();
        break;
      }
    };

  module.exports = SearchResultsStore;
