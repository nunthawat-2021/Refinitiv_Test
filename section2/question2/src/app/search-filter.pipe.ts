import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
  pure: false
})
export class SearchFilterPipe implements PipeTransform {

  transform(items: any[], filter: Object): any {
    if (!items || !filter) {
        return items;
    }
    return items.filter(item => item.indexOf(filter) !== -1);
}

}
