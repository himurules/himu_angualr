import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookItemFormComponent } from './book-item-form.component';
import { BookItemListComponent } from './book-item-list.component';

const routes: Routes = [
  { path: 'add', component: BookItemFormComponent },
  { path: ':category', component: BookItemListComponent },
  { path: '', redirectTo: 'all', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
