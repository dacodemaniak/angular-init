import { Injectable } from '@angular/core';
import { NoteServiceInterface } from './note-service-interface';
import { NoteRepository } from './model/note-repository';
import { delay, dematerialize, materialize, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService implements NoteServiceInterface {

  private _notes: Array<NoteRepository> = []

  constructor() {
    this._load()
  }

  getAll(): Observable<NoteRepository[]> {
    return of([... this._notes]) // Copy of this._notes
      .pipe(
        materialize(),
        delay(1000),
        dematerialize()
      )
  }

  findOne(id: number): NoteRepository | null {
    throw new Error('Method not implemented.');
  }

  add(note: NoteRepository): NoteRepository {
    throw new Error('Method not implemented.');
  }

  private _load(): void {
    const note = new NoteRepository()

    note.addTheme('Angular init')
    note.addTheme('Class Angular')
    note.addTheme('Components')

    note.id = 1

    note.titre = 'Service Angular'

    note.content = 'Contenu de la note associée'

    this._notes.push(note)
  }
}
