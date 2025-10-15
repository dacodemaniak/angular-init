import { inject, Injectable } from '@angular/core';
import { NoteServiceInterface } from './note-service-interface';
import { NoteRepository } from './model/note-repository';
import { delay, dematerialize, map, materialize, Observable, of, tap } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Note } from './note';
import { ThemeType } from './model/theme.type';

@Injectable({
  providedIn: 'root'
})
export class NoteService implements NoteServiceInterface {

  private _notes: Array<NoteRepository> = []

  private _httpClient = inject(HttpClient)

  constructor() {}

  getAll(): Observable<NoteRepository[]> {
    const endPoint = `http://localhost:3000/notes`

    return this._httpClient.get<any[]>(
      endPoint
    ).pipe(
      tap((datas: any[]) => console.table(datas)),
      map((datas: any[]) => {
        return datas.map((data: any) => {
          const noteRepository = new NoteRepository()
          
          noteRepository.id = data.id
          noteRepository.titre = data.titre
          noteRepository.content = data.content
          noteRepository.date = new Date(data.date)
          // Treat themes as Map
          for (const theme of data.themes) {
            noteRepository.themes.set(theme.id, theme.value)
          }
          return noteRepository
        })
      })
    )
  }

  findOne(id: number): NoteRepository | null {
    throw new Error('Method not implemented.');
  }

  add(note: NoteRepository): Observable<HttpResponse<NoteRepository>> {
    const endPoint = 'http://localhost:3000/notes'

    // Préparer la donnée à transmettre
    const rawData: any = {
      titre: note.titre,
      content: note.content,
      date: note.date,
      themes: (() => {
        const themesArray: Array<ThemeType> = []
        note.themes.forEach((value: string, key: number) => {
          themesArray.push({id: key, value})
        })
        return themesArray
      })() // Autocalled function
    }

    return this._httpClient.post<any>(
      endPoint,
      rawData,
      {
        observe: 'response'
      }
    )
  }

}
