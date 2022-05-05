import {Component, OnInit} from '@angular/core';
import {Clipboard} from '@angular/cdk/clipboard';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private clipboard: Clipboard,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  onShareClick() {
    this.clipboard.copy('https://mabduqayum.github.io/fifty-days/');
    this.snackBar.open('Share link copied', '',
      {verticalPosition: 'top', duration: 1000, panelClass: 'share'});
  }
}
