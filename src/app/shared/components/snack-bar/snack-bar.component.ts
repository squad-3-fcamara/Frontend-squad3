import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss']
})
export class SnackBarComponent implements OnInit {

  public errors: any[] = [];
  constructor(@Inject(MAT_SNACK_BAR_DATA) private data: any) {
    this.errors.push(this.data.errors);
  }

  ngOnInit(): void {
  }

}
