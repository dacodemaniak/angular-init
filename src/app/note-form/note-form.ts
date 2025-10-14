import { Component } from '@angular/core';
import { NoteService } from '../note/note-service';

@Component({
  selector: 'app-note-form',
  imports: [],
  templateUrl: './note-form.html',
  styleUrl: './note-form.scss'
})
export class NoteForm {
  constructor(
    private _service: NoteService
  ) {
  }
}
