import { Component } from '@angular/core';
import { MyToolbar } from '../../directives/my-toolbar';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-toolbar',
  imports: [MyToolbar, RouterLink],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.scss'
})
export class Toolbar {

}
