import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NoteRepository } from './note/model/note-repository';
import { ThemeType } from './note/model/theme.type';
import { NgClass, UpperCasePipe } from "@angular/common";
import { Note } from './note/note';
import { DatePipe } from './shared/pipes/date-pipe'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgClass, Note, DatePipe, UpperCasePipe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  protected readonly title = signal('angular-init')
  protected note = new NoteRepository()
  protected theme: string | undefined
  protected themes: Array<ThemeType> = []
  protected inputType = 'password'

  constructor() {
    this.theme = ''
  }

  ngOnInit(): void {
    this.note.addTheme('Angular init')
    this.note.addTheme('Class Angular')
    this.note.addTheme('Components')
    this.note.date = new Date('2025-10-13')

    this.theme = this.note.themes.get(1)

    this.themes = this.note.getThemesAsArray()
  }

  switchVisibililty() {
    this.inputType = this.inputType === 'password' ? 'text' : 'password'
  }

  updateTheme(event: ThemeType) {
    this.themes.splice(
      this.themes.findIndex((obj: ThemeType) => obj.id === event.id),
      1,
      event
    )
  }
}
