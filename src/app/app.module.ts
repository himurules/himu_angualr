import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookItemComponent} from './book-item.component';
import { BookItemListComponent } from './book-item-list.component';
import { ReadDirective} from './read.directive';
import { CategoryListPipe } from './category-list.pipe';
import { BookItemFormComponent} from './book-item-form.component';
import {lookupListToken, lookupLists} from './dataprovider';

@NgModule({
  declarations: [
    AppComponent,
    BookItemComponent,
    BookItemListComponent,
    ReadDirective,
    CategoryListPipe,
    BookItemFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: lookupListToken, useValue: lookupLists}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
