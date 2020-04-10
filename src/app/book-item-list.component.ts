import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { BookItemService, BookItem } from './book-item.service';

@Component({
  selector: 'app-book-item-list',
  templateUrl: './book-item-list.component.html',
  styleUrls: ['./book-item-list.component.css']
})
export class BookItemListComponent implements OnInit{
  category = '';
  bookItems: BookItem[];
  constructor(private bookItemService: BookItemService, private activatedRoute: ActivatedRoute ) {
  }
  ngOnInit(): void {
    this.activatedRoute.paramMap
      .subscribe(paramMap => {
        let category = paramMap.get('category');
        if (category.toLowerCase() === 'all') {
          category = '';
        }
        this.getBookItems(category);
      });
  }

  onBookItemRemove(bookItem){
    this.bookItemService.delete(bookItem)
      .subscribe(() => {
        this.getBookItems(this.category);
      });
  }

  getBookItems(category){
    this.category = category;
    this.bookItemService.get(category)
      .subscribe(bookItems => {
        this.bookItems = bookItems;
      });
  }
}
