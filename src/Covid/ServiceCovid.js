app.service('CovidSortService', function(CovidService) {
    
   this.sort = function(a) {
       return CovidService.sort(a);
    }


    this.getDate = function(a) {
      return CovidService.getDate(a);
   }


   this.displayChart = function(a) {
      return CovidService.displayChart(a);
   }

   this.getCountries = function(a) {
      var d=CovidService.getCountries(a)
      return d;
   }

 });