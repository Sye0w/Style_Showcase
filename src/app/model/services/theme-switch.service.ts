import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeSwitchService {
  private readonly THEME_KEY = 'isDarkTheme'; 
  themeSubject = new BehaviorSubject<boolean>(this.getSavedTheme());
  theme$ = this.themeSubject.asObservable();

  constructor() {
    const savedTheme = this.getSavedTheme();
    this.themeSubject.next(savedTheme);
  }

  toggleTheme() {
    const newTheme = !this.themeSubject.value;
    this.themeSubject.next(newTheme);
    this.saveTheme(newTheme);
  }


  private getSavedTheme(): boolean {
    const storedTheme = localStorage.getItem(this.THEME_KEY);
    return storedTheme !== null ? JSON.parse(storedTheme) : false;
  }


  private saveTheme(isDarkTheme: boolean): void {
    localStorage.setItem(this.THEME_KEY, JSON.stringify(isDarkTheme));
  }
}
