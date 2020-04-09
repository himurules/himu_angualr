import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookItemComponent} from './book-item.component';
import { BookItemListComponent } from './book-item-list.component';
import { ReadDirective} from './read.directive';
import { CategoryListPipe } from './category-list.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BookItemComponent,
    BookItemListComponent,
    ReadDirective,
    CategoryListPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
