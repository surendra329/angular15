import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private usernameSubject = new BehaviorSubject<string>('');
  username$ = this.usernameSubject.asObservable();

  setUsername(name: string) {
    this.usernameSubject.next(name);
    console.log('localStorage --',localStorage)
  }

  getUsername(): string {
    console.log('localStorage --',localStorage)

    return this.usernameSubject.value;
  }
}
