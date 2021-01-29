app.service('CovidSortService', function(CovidService) {
    this.sortByColumns = function(a) {
       return CovidService.multiply(a.key,a.sortReverse,a.sortKey);
    }
 });