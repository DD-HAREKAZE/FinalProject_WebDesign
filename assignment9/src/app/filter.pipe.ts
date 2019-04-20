import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(citys: any, termSearch: any): any {
    if(termSearch === undefined) return citys;
    return citys.filter(function (onecity) {
      return onecity.location.toLowerCase().includes(termSearch.toLowerCase());
    });
  }

}
