import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NgIf } from '@angular/common';
import { MovieService } from './movie.service';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-add-movie',
  standalone: true,
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css'],
  imports: [
    FormsModule,
    NgIf,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
  ],
})
export class AddMovieComponent {
  movie: Movie = { id: 0, title: 'test', director: 'somebody', released: "2020-10-10" };
  success = false;

  constructor(private movieService: MovieService) {}

  onSubmit(form: NgForm) {
    if (form.invalid) return;
    this.movieService.addMovie(this.movie).subscribe(ok => {
      this.success = ok;
      console.log(`Add Movie returned: ${ok}`);
      if (ok) {
        form.resetForm();
      }
    });
  }
}
