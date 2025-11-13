import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, signal, computed } from '@angular/core';
import { catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _token = signal<string | null>(null);

  // Computed helper: ob ein Token vorhanden ist
  readonly isAuthenticated = computed(() => !!this._token());

  // Optionaler Zugriff wie früher:
  static get token(): string | null {
    return UserService.instance._token();
  }

  static instance: UserService;

  constructor(private client: HttpClient) {
    UserService.instance = this;
  }

  register(email: string, password: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { email, password };
    return this.client.post('https://localhost:7267/register', body, { headers, observe: 'response' })
      .pipe(
        map(res => res.status === 200),
        catchError(() => of(false))
      );
  }

  login(email: string, password: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { email, password };

    return this.client.post<{ accessToken: string }>(
      'https://localhost:7267/login?useCookies=false',
      body,
      { headers, observe: 'response' }
    ).pipe(
      map(response => {
        if (response.status === 200 && response.body?.accessToken) {
          this._token.set(response.body.accessToken);
          console.log('Token set:', response.body.accessToken);
          return true;
        }
        return false;
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Login failed', error);
        this._token.set(null);
        return of(false);
      })
    );
  }

  logout() {
    this._token.set(null);
  }

  get tokenSignal() {
    return this._token.asReadonly();
  }
}
