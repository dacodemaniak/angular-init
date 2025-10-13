import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NoteRepository } from './models/note-repository';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-init')
  protected note = new NoteRepository()
  protected theme: string | undefined
  protected themes: Array<any> = []

  constructor() {
    this.theme = ''
  }

  ngOnInit(): void {
    this.note.addTheme('Angular init')
    this.note.addTheme('Class Angular')
    this.note.addTheme('Components')

    this.theme = this.note.themes.get(1)

    this.themes = this.note.getThemesAsArray()
  }
}
