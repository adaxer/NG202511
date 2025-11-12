import { Injectable } from '@angular/core';
import { MovieInfo } from '../models/movie-info';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { ResultPage } from '../models/result-page';
import { Movie } from '../models/movie';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
baseUrl = "https://localhost:7267";

  constructor(private http: HttpClient, private userService: UserService) { }

  getMoviePage(pageSize: number, pageNo: number): Observable<ResultPage<MovieInfo>> {
    return this.http.get<ResultPage<MovieInfo>>(`${this.baseUrl}/movies/list/${pageSize}/${pageNo}`);
  }

  getMovieDetails(id: number): Observable<Movie> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${UserService.token}`,
      'Content-Type': 'application/json'
    });    return this.http.get<Movie>(`${this.baseUrl}/movies/${id}`, {headers});
  }

  addMovie(movie: Movie): Observable<boolean> {
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${UserService.token}`,
    'Content-Type': 'application/json'
  });

  return this.http.post(`${this.baseUrl}/movies`, movie, { headers })
    .pipe(
      map(() => true),
      catchError(err => {
        console.error('Add movie failed', err);
        return of(false);
      })
    )
}

}
