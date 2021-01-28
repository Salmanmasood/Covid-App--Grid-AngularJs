/// <reference path="Module.js" />
app.controller("homeController", function ($scope,$http) {
    
    scope = $scope;
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    scope.country="Pakistan";  
    scope.sortKey = 'Date';
    scope.sortReverse = false;
    scope.itemsPerPage = 50;
     
  

    scope.sort = function(key){
        scope.sortReverse = (scope.sortKey == key) ? !scope.sortReverse : scope.sortReverse;
        scope.sortKey = key;
    }
   
    //service calling............................................
let active=[],confirmed=[],death=[],recovered=[],datexAxis=[];
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
       data.forEach(element => {
        var d=new Date(element.Date);  
        var monthYear=months[d.getMonth()]+","+d.getFullYear();
        element.Date=d.getDate()+","+monthYear;
        active.push(element.Active);
        recovered.push(element.Recovered);
        death.push(element.Deaths);
        confirmed.push(element.Confirmed);
        datexAxis.push(monthYear);
        
       });
       scope.data=data;
       
    });


    var gdata = {"xData": datexAxis,"yData":[{
        "name": "Active",
        "data": active
    }, {
        "name": "Confrimed",
        "data": confirmed
    }, {
        "name": "Death",
        "data": death
    }, {
        "name": "Recovered",
        "data": recovered
    }]}
    
    scope.lineChartYData=gdata.yData
    scope.lineChartXData=gdata.xData


 

    

}

    


   
   
});
