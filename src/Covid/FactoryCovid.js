app.factory('CovidService', function($http) {
    var factory = {};
    
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
  

    factory.sort = function(obj){
        obj.sortReverse = (obj.sortKey == obj.key) ? !obj.sortReverse : obj.sortReverse;
        obj.sortKey = obj.key;
        return obj;
    }


factory.getDate = function(date){
    
    var d= new Date(date);
    let completeDate={
       monthName: months[d.getMonth()],
       year:d.getFullYear(),
       day:d.getDate(),
       month:d.getMonth()
    }
    console.log(date+"------> "+completeDate);
    return completeDate;
 
    }
   

    factory.DisplayChart = function(data){
        
        var gdata = {"xData": data.datexAxis,"yData":[{
            "name": "Active",
            "data": data.active
        }, {
            "name": "Confrimed",
            "data": data.confirmed
        }, {
            "name": "Death",
            "data": data.death
        }, {
            "name": "Recovered",
            "data": data.recovered
        }]}
        

        return gdata;
    }





    

    
    return factory;
 });