import { Component, OnInit } from '@angular/core';
import {BookItemService} from './book-item.service';

@Component({
  selector: 'app-book-item-list',
  templateUrl: './book-item-list.component.html',
  styleUrls: ['./book-item-list.component.css']
})
export class BookItemListComponent implements OnInit{
  bookItems = null;
  constructor(private bookItemService: BookItemService ) {
  }
  ngOnInit(): void {
    this.bookItems = this.bookItemService.get();
  }

  onBookItemRemove(bookItem){
    this.bookItemService.delete(bookItem);
  }
}
