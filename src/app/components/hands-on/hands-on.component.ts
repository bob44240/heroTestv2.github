import { Component, OnInit, ViewChild } from '@angular/core';
import * as Handsontable from 'handsontable';


@Component({
  selector: 'app-hands-on',
  templateUrl: './hands-on.component.html',
  styleUrls: ['./hands-on.component.css']
})
export class HandsOnComponent implements OnInit {
  dataset: any[] = Handsontable.helper.createEmptySpreadsheetData(10,10);
  @ViewChild('hot') hot;

  constructor() {
    console.log(this.dataset)
  }

  ngOnInit() {
    console.log(this.hot);
  }

}
