import { Component, OnInit, Inject } from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import { BookItemService } from './book-item.service';
import { lookupListToken } from './dataprovider';

@Component({
  selector: 'bl-book-item-form',
  templateUrl: './book-item-form.component.html',
  styleUrls: ['./book-item-form.component.css']
})
export class BookItemFormComponent implements OnInit{
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private bookItemService: BookItemService,
    @Inject(lookupListToken) public lookupLists
  ) {
  }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: this.formBuilder.control('', Validators.compose(
        [
            Validators.required,
            Validators.pattern('[\\w\\-\\s\\/]+'),
          ]
      )),
      description: this.formBuilder.control('', Validators.required),
      category: this.formBuilder.control('Fiction'),
      price: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]*$'),
      ])),
      isRead: this.formBuilder.control('false'),
      imgSrc: this.formBuilder.control('', this.urlValidator),
      rating: this.formBuilder.control(5)
    });
  }

  urlValidator(control: FormControl) {
      if ( control.value.trim().length === 0 ) {
        return {message: 'Invalid URL'};
      }
      const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator

      if ( pattern.test(control.value) ) {
         return null;
       }else{
          return {message: 'Invalid URL'};
       }
  }

  onSubmit(bookItem){
    console.log(bookItem);
    this.bookItemService.add(bookItem);
  }
}
