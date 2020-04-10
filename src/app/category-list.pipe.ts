import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryList'
})
export class CategoryListPipe implements PipeTransform{
  transform(bookItems){
    const categories = [];
    bookItems.forEach(bookItem => {
      if (categories.indexOf(bookItem.category) <= -1){
        categories.push(bookItem.category);
      }
    });
    return categories.join(', ');
  }
}
