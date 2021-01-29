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

let s=[];
scope.countries=CovidSortService.getCountries(s);
 console.log(s);
console.log(scope.countries);
    //service calling............................................

scope.getCovidData = function () {

    let active=[],confirmed=[],death=[],recovered=[],datexAxis=[];
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
    
        element.Date=element.Date.substring(0,10);
        active.push(element.Active);
        recovered.push(element.Recovered);
        death.push(element.Deaths);
        confirmed.push(element.Confirmed);
        datexAxis.push(date.monthName+","+date.year);
        
       });
       scope.data=data;
       
    });

    let dataformChart={
        active:active,
        confirmed:confirmed,
        death:death,
        recovered:recovered,
        datexAxis:datexAxis

    }
    let gdata= CovidSortService.displayChart(dataformChart)
    
    scope.lineChartYData=gdata.yData
    scope.lineChartXData=gdata.xData


 

    

}

    


   
   
});
