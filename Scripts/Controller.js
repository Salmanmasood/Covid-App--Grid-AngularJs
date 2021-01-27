/// <reference path="Module.js" />
app.controller("homeController", function ($scope,$http) {
    
    scope = $scope;
   
    scope.country="Pakistan";  
    scope.sortKey = 'Date';
    scope.sortReverse = false;
    scope.itemsPerPage = 50;
     



    scope.sort = function(key){
        scope.sortReverse = (scope.sortKey == key) ? !scope.sortReverse : scope.sortReverse;
        scope.sortKey = key;
    }
   
    //service calling............................................

scope.getCovidData = function () {


    let data=[];
   
    $http({
        method: 'GET',
        url: 'https://api.covid19api.com/total/country/'+ scope.country,
        headers: {
            'Content-Type': 'application/json',
            
            // 'Authorization': AUTH_STRING_HERE
        }
    }).then(function (response) {
      
       data = response.data;
      
       scope.data=data;
    });



 

    

}

    


   
   
});
