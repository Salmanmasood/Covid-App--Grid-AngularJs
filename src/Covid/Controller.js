/// <reference path="Module.js" />

app.controller("homeController", function ($scope,$http,CovidSortService) {
    
     scope = $scope;
     scope.country="Pakistan";  
    scope.itemsPerPage = 50;

  
scope.sortingObject={sortReverse : false,sortKey : 'Date',key:'Date'}

scope.sort= function(key) {
    if(key){
        scope.sortingObject.key=key;
        CovidSortService.sort(scope.sortingObject);

    }


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
        var date= CovidSortService.getDate(element.Date)
    
        element.Date=date.year+"-"+(date.month+1) + '-'+date.day;
        active.push(element.Active);
        recovered.push(element.Recovered);
        death.push(element.Deaths);
        confirmed.push(element.Confirmed);
        datexAxis.push(date.monthName+","+date.year);
        
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
