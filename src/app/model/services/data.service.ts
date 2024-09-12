import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, shareReplay, catchError, of, map } from 'rxjs';
import { IStyleInfo } from '../design.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataSubject = new BehaviorSubject<IStyleInfo[]>([]);
  public data$ = this.dataSubject.asObservable();
  private dataUrl = '../../../assets/data.json';

  constructor(private http: HttpClient) {}

  fetchData(): Observable<IStyleInfo[]> {
    return this.http.get<IStyleInfo[]>(this.dataUrl).pipe(
      shareReplay(1),
      catchError(error => {
        console.error('Error fetching data:', error);
        return of([]);
      })
    );
  }

  loadData(): void {
    this.fetchData().subscribe(data => {
      this.dataSubject.next(data);
    });
  }

  getFirstThreeItems(): Observable<IStyleInfo[]> {
    return this.data$.pipe(
      map(data => data.slice(0, 3))
    );
  }

  getRemainingItems(): Observable<IStyleInfo[]> {
    return this.data$.pipe(
      map(data => data.slice(3))
    );
  }
}
