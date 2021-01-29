app.factory('CovidService', function() {
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
   

    
    return factory;
 });