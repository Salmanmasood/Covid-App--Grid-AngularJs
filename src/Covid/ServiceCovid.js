app.service('CovidSortService', function(CovidFactory) {
    
   this.sort = function(a) {
       return CovidFactory.sort(a);
    }


    this.getDate = function(a) {
      return CovidFactory.getDate(a);
   }


   this.displayChart = function(a) {
      return CovidFactory.displayChart(a);
   }

   

 });