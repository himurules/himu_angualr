import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent {
  @Input() bookItem;
  @Output() remove = new EventEmitter();

  onRemove() {
    console.log('Remove Called');
    this.remove.emit(this.bookItem);
  }

  numberToArray(n: number): number[] {
    return [...Array(n).keys()];
  }
}
