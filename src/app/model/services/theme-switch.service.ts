import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ThemeSwitchService {
  themeSubject = new BehaviorSubject<boolean>(false);
  theme$ = this.themeSubject.asObservable();

  constructor() { }

  toggleTheme() {
    this.themeSubject.next(!this.themeSubject.value);
  }
}
