app.factory('CovidService', function() {
    var factory = {};
    


    factory.sort = function(key,sortReverse,sortKey){
        sortReverse = (sortKey == key) ? !sortReverse : sortReverse;
        sortKey = key;
    }
   

    
    return factory;
 });