// Global variable to render in search results page
var results = [];

angular.module('QueryService', [])

.factory('QueryFactory', function($http) {
  // Querying the Businesses Database
  var queryType = function(type) {
    return $http({
      method: 'GET',
      url: '/api/business',
    }).then(function(res){
      // if type is an array then the input is coming from the search bar and it is an array
      results = [];
      if(Array.isArray(type)){
        type.forEach(function (queryWords){
          //iterates thru the results data object
          res.data.forEach(function(resDataObject){
          // splits specialty string into an array
          var specialtySplit = resDataObject.specialty.split(' ');
            specialtySplit.forEach(function(specialtyWords){
              if(queryWords === specialtyWords){
                results.push(resDataObject);
              }
            })
          })
        })
        // if it is not an array then it is a click from one of the category buttons
      } else {
        alert("need to add category click to factory ask andy")
      }
    });
  };

  return {
    queryType: queryType
  };
});
