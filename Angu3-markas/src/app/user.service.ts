import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  url:any = {
    users: 'https://jsonplaceholder.typicode.com/users'
  }

  constructor(private http: HttpClient) {

  }

  public getTodo(): Observable<any>{
    return this.http.get(this.url.users)

    // .pipe(
    //   map((todo) => {
    //     console.log('here', todo);
    //     return todo
    //   }),
    //   filter((todo:any) => todo.id === '0')
    // );
  }

  public addTodo(): Observable<any>{

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        // 'Authorization': 'my-auth-token'
      })
    };

    

    return this.http.post(this.url.users.name, httpOptions);

  }
}
