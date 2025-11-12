import { Component, OnInit } from '@angular/core';
import { MovieService } from './movie.service';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinner, MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Movie } from '../models/movie';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [MatCardModule, MatProgressSpinnerModule, DatePipe],
  templateUrl: './movie-details.component.html',
  styles: ``
})
export class MovieDetailsComponent {
  movie?: Movie;

  constructor(private route: ActivatedRoute) {
    this.movie = this.route.snapshot.data['movie'];
  }
}