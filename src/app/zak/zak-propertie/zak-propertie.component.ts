import { Component, OnInit } from '@angular/core';
import {MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-zak-propertie',
  templateUrl: './zak-propertie.component.html',
  styleUrls: ['./zak-propertie.component.css']
})
export class ZakPropertieComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

}
