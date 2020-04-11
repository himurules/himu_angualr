import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent {
  @Input() bookItem;
  @Output() remove = new EventEmitter();
  @Output() edit = new EventEmitter();

  onRemove() {
    this.remove.emit(this.bookItem);
  }

  onEdit() {
    this.edit.emit(this.bookItem);
  }

  numberToArray(n: number): number[] {
    return [...Array(n).keys()];
  }
}
