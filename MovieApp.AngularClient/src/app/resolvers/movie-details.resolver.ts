import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { MovieService } from '../movies/movie.service';
import { Movie } from '../models/movie';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

export const movieDetailsResolver: ResolveFn<Movie | null> = (route) => {
  const service = inject(MovieService);
  const id = Number(route.paramMap.get('id'));
  if (!id) return of(null);

  return service.getMovieDetails(id).pipe(
    catchError(() => of(null))
  );
};
