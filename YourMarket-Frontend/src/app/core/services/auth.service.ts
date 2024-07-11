import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { SignUpUser } from '../api/models/signup_user';
import { SignInUser } from '../api/models/signin_user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;
  private authStatusListener = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {}

  signUpUser(user: SignUpUser) {
    this.http.post('http://localhost:3005/api/auth/signup', user).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/search-page']);
      },
      (error) => {
        console.log(error);
        this.authStatusListener.next(false);
      }
    );
  }

  loginUser(user: SignInUser) {
    this.http
      .post('http://localhost:3005/api/auth/signin', user, {
        withCredentials: true,
      })
      .subscribe(
        (response: any) => {
          this.isAuthenticated = true;
          this.authStatusListener.next(true);
          this.router.navigate(['/search-page']);
        },
        (error) => {
          console.log(error);
          this.authStatusListener.next(false);
        }
      );
  }

  logout() {
    this.http
      .post(
        'http://localhost:3005/api/auth/signout',
        {},
        { withCredentials: true }
      )
      .subscribe(
        () => {
          this.isAuthenticated = false;
          this.authStatusListener.next(false);
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 2000);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  checkAuthStatus() {
    this.http
      .get('http://localhost:3005/api/auth/checkAuth', {
        withCredentials: true,
      })
      .subscribe(
        (response: any) => {
          if (response.isAuthenticated) {
            this.isAuthenticated = true;
            this.authStatusListener.next(true);
          } else {
            this.isAuthenticated = false;
            this.authStatusListener.next(false);
          }
        },
        (error) => {
          this.isAuthenticated = false;
          this.authStatusListener.next(false);
        }
      );
  }
}
