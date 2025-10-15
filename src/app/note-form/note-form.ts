import { Component } from '@angular/core';
import { NoteService } from '../note/note-service';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NoteFormBuilder } from './note-form-builder';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { ThemeService } from '../note/theme-service';
import { Observable } from 'rxjs';
import { ThemeType } from '../note/model/theme.type';

@Component({
  selector: 'app-note-form',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    JsonPipe,
    AsyncPipe
  ],
  templateUrl: './note-form.html',
  styleUrl: './note-form.scss'
})
export class NoteForm {

  public form!: FormGroup
  public themes$!: Observable<ThemeType[]>

  constructor(
    private _service: NoteService,
    private _themeService: ThemeService
  ) {
  }

  ngOnInit(): void {
    const formBuilder: NoteFormBuilder = new NoteFormBuilder()
    this.form = formBuilder.form
    this.themes$ = this._themeService.getAll()
  }

  get c(): {[key: string]: AbstractControl<any>} {
    return this.form.controls
  }

  onSubmit() {
    console.log(`Got ${JSON.stringify(this.form.value)}`)
  }
}
