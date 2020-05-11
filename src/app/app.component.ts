import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'
import{ MatDialog} from '@angular/material/dialog'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    name=""
    colors = ['red','blue','yellow','black']
}
   