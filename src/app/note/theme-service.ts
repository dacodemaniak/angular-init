import { inject, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { ThemeType } from './model/theme.type';
import { HttpClient } from '@angular/common/http';
import { NoteServiceInterface } from './note-service-interface';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _httpClient = inject(HttpClient)

  getAll(): Observable<ThemeType[]> | Observable<any> {
    const endPoint = 'http://localhost:3000/themes'

    return this._httpClient.get<ThemeType[] | any>(
      endPoint
    )
  }
}
