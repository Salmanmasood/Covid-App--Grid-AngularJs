app.service('CovidSortService', function(CovidService) {
    
   this.sort = function(a) {
       return CovidService.sort(a);
    }


    this.getDate = function(a) {
      return CovidService.getDate(a);
   }


 });