import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { Welcome } from './welcome';
import { MovieList } from './movies/movie-list';
import { MovieDetails } from './movies/movie-details';
import { Login } from './user/login';
import { canDeactiveGuard } from './guards/can-deactive.guard';
import { canAddMovieGuard } from './guards/canAddMovieGuard';
import { AddMovie } from './movies/add-movie';
import { movieDetailsResolver } from './resolvers/movie-details.resolver';

export const routes: Routes = [
  { path: '', component: Welcome},
  { path: 'welcome', component: Welcome},
  { path: 'movies', component: MovieList},
  { path: 'addmovie', component: AddMovie, canActivate: [canAddMovieGuard] },
  { path: 'movie/:id', component: MovieDetails, resolve: { movie: movieDetailsResolver }},
  { path: 'login', component: Login, canDeactivate: [canDeactiveGuard]},
];
