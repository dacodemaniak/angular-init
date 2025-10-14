import { Component } from '@angular/core';
import { MyToolbar } from '../../directives/my-toolbar';

@Component({
  selector: 'app-toolbar',
  imports: [MyToolbar],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.scss'
})
export class Toolbar {

}
