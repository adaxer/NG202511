import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { WelcomeComponent } from './welcome.component';
import { MovieListComponent } from './movies/movie-list.component';
import { MovieDetailsComponent } from './movies/movie-details.component';
import { LoginComponent } from './user/login.component';
import { canDeactiveGuard } from './guards/can-deactive.guard';
import { canAddMovieGuard } from './guards/canAddMovieGuard';
import { AddMovieComponent } from './movies/add-movie.component';
import { movieDetailsResolver } from './resolvers/movie-details.resolver';

export const routes: Routes = [
  { path: '', component: WelcomeComponent},
  { path: 'welcome', component: WelcomeComponent},
  { path: 'movies', component: MovieListComponent},
  { path: 'addmovie', component: AddMovieComponent, canActivate: [canAddMovieGuard] },
  { path: 'movie/:id', component: MovieDetailsComponent, resolve: { movie: movieDetailsResolver }},
  { path: 'login', component: LoginComponent, canDeactivate: [canDeactiveGuard]},
];
