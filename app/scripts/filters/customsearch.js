'use strict';

/**
 * @ngdoc filter
 * @name Search App filter custom search
 * @description
 * # Custom Search for data array
 * # it's not ideal, but in result support this strange requirement —
 * # A search for Lisp Common should match
 * # a programming language named "Common Lisp"
 */

angular.module('searchApp').filter('customSearch', function () {
  var excluded = [];

  /**
   * { Split string by space }
   *
   * @method     _splitSearchString
   * @param      {String}  searchString  { Search String }
   * @return     {Array}                 { Array of splitted elements }
   */
  function _splitSearchString(searchString) {
    var splitStr = searchString.toLowerCase().split(' ');
    excluded = [];
    splitStr.forEach(function (val, index) {
      if (!!val && val.indexOf('-') > -1) {
        excluded.push(val.replace('-', ''));
        splitStr.splice(index, 1);
      }
    });
    return splitStr;
  }

  /**
   * { Check is search string empty }
   *
   * @method     _isSearchStringEmpty
   * @param      {String}   searchString  { Search string }
   * @return     {boolean}                { Result of check }
   */
  function _isSearchStringEmpty(searchString) {
    return searchString === undefined ||
      searchString === null ||
      searchString === '';
  }

  /**
   * { Search algorithm }
   *
   * @method     _searchByString
   * @param      {Object}   item         { Object for search }
   * @param      {Array}    searchArray  { Array of text for search }
   * @return     {boolean}               { Is object matches the criteria }
   */
  function _searchByString(item, searchArray) {
    // Iterate search array
    for (var i = 0; i < searchArray.length; i++) {
      // Iterate object properties and return result
      for (var key in item) {
        if (item.hasOwnProperty(key)) {
          var value = item[key].toLowerCase();
          // Iterate excluded values and exclude if record has been found
          for (var j = 0; j < excluded.length; j++) {
            if (value.indexOf(excluded[j]) > -1) {
              return false;
            }
          }
        }
        // If record found
        if (value.indexOf(searchArray[i]) > -1) {
          return true;
        }
      }
    }
    // If record not found
    return false;
  }

  /**
   * { Search process }
   * @return     {Array}    { Filtered elements }
   */
  return function (items, searchString) {
    if (!_isSearchStringEmpty(searchString)) {
      var searchArray = _splitSearchString(searchString);

      return items.filter(function (item) {
        return _searchByString(item, searchArray);
      });
    }
  };

});
