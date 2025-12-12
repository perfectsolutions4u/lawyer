import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { SiteData } from '../models/site-data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataUrl = 'assets/data/data.json';
  private cachedData: SiteData | null = null;

  constructor(private http: HttpClient) {}

  getSiteData(): Observable<SiteData> {
    if (this.cachedData) {
      return of(this.cachedData);
    }

    return this.http.get<SiteData>(this.dataUrl).pipe(
      map(data => {
        this.cachedData = data;
        return data;
      }),
      catchError(error => {
        console.error('Error loading site data:', error);
        throw error;
      })
    );
  }

  clearCache(): void {
    this.cachedData = null;
  }
}

