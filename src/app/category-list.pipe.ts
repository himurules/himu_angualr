import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryList'
})
export class CategoryListPipe implements PipeTransform{
  transform(bookItems){
    const categories = [];
    let ret = `<ul class="list-inline text-center align-items-center">`;
    bookItems.forEach(bookItem => {
      if (categories.indexOf(bookItem.category) <= -1){
        categories.push(bookItem.category);
        ret += `<li class="list-inline-item"><h2>` + bookItem.category + `</h2></li>`;
      }
    });
    ret += `</ul>`;
    return ret;
  }
}
