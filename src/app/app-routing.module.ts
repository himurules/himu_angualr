import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookItemListComponent } from './book-item-list.component';

const routes: Routes = [
  {
    path: 'item',
    loadChildren: () => import('./new-item/new-item.module').then(m => m.NewItemModule)
  },
  { path: ':category', component: BookItemListComponent },
  { path: '', redirectTo: 'all', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
