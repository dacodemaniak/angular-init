import { Component } from '@angular/core';
import { NoteService } from '../note/note-service';
import { NoteRepository } from '../note/model/note-repository';
import { NoteServiceInterface } from '../note/note-service-interface';
import { NgTemplateOutlet } from '@angular/common';
import { take } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [NgTemplateOutlet],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  public notes: Array<NoteRepository> = []

  constructor(
    private _service: NoteService
  ) {
  }

  ngOnInit(): void {
    this._service.getAll()
      .pipe(
        take(1)
      )
      .subscribe({
        next: (notes: Array<NoteRepository>) => {
          this.notes = notes
        },
        error: (error: any) => {
          console.log(error)
        },
        complete: () => {
          console.log('Emit was completed')
        }
      })
  }
}
