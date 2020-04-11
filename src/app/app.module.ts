import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpXhrBackend } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookItemComponent} from './book-item.component';
import { BookItemListComponent } from './book-item-list.component';
import { ReadDirective} from './read.directive';
import { CategoryListPipe } from './category-list.pipe';
import { lookupListToken, lookupLists } from './dataprovider';
import { MockXHRBackend} from './mock-xhr-backend';
import { CategoryListComponent} from './category-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BookItemComponent,
    BookItemListComponent,
    ReadDirective,
    CategoryListPipe,
    CategoryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    { provide: lookupListToken, useValue: lookupLists },
    { provide: HttpXhrBackend, useClass: MockXHRBackend }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
