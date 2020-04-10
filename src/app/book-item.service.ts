import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookItemService{
  constructor(private http: HttpClient) {
  }

  get(category) {
    const getOptions = {
      params: { category }
    };
    return this.http.get<BookItemResponse>('bookitems', getOptions)
      .pipe(map((response: BookItemResponse) => {
        return response.bookItems;
      }),
        catchError(this.handleError)
      );
  }

  add(bookItem: BookItem) {
    return this.http.post('bookitems', bookItem)
      .pipe(catchError(this.handleError));
  }

  delete(bookItem: BookItem){
    return this.http.delete(`bookitems/${bookItem.id}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error.message);
    return throwError('Data error occurred, please try again.');
  }
}

export interface BookItem{
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  imgSrc: string;
  rating: number;
  isRead: boolean;
}
interface BookItemResponse {
  bookItems: BookItem[];
}
