import { user } from './user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Observable, EMPTY, empty } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { TOOLTIP_PANEL_CLASS } from '@angular/material/tooltip';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = " http://localhost:3001/users"

  constructor(private snackBar: MatSnackBar,
    private http: HttpClient) { }

  showMenssage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-sucess']
    })
  }

  create(user: user): Observable<user> {
    return this.http.post<user>(this.baseUrl, user).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  read(): Observable<user[]> {
    return this.http.get<user[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  readById(id: string): Observable<user> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<user>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  update(user: user): Observable<user> {
    const url = `${this.baseUrl}/${user.id}`;
    return this.http.put<user>(url, user).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )

  }

  delete(id: number): Observable<user> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<user>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  errorHandler(e: any): Observable<any> {
    this.showMenssage('Ocorreu um erro', true);
    return EMPTY
  }

}
