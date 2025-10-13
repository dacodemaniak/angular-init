import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ThemeType } from './model/theme.type';

@Component({
  selector: 'app-note',
  imports: [],
  templateUrl: './note.html',
  styleUrl: './note.scss'
})
export class Note {

  @Input() theme!: ThemeType
  @Output() onUpdateTheme: EventEmitter<ThemeType> = new EventEmitter()

  update() {
    this.onUpdateTheme.emit({... this.theme, value: this.theme.value + ' was updated'})
  }
}
