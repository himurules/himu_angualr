import { Component, Input } from '@angular/core';

@Component({
  selector: 'bl-category-list',
  template: `
    <div *ngIf="categories.length > 0" class="text-white text-center">
      <span class="label {{category.toLowerCase()}}" *ngFor="let category of categories">
        {{ category }}
      </span>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        margin-bottom: 10px;
        margin-top: 10px;
      }
      :host-context(.drama) {
        background-color: #c04848;
      }
      :host-context(.fiction){
        background-color: brown;
      }
      :host-context(.reality){
        background-color: #480048;
      }
      span {
        display: inline-block;
        margin-right: 4px;
        margin-bottom: 4px;
      }
      .label {
        background-color: #c04848;
        border-radius: 4px;
        display: inline-block;
        padding: 2px 6px;
        font-style: italic;
        width: max-content;
      }
    `
  ]
})

export class CategoryListComponent{
  @Input() categories: string[];
}
