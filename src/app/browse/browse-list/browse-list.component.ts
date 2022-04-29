import { Component, OnInit } from '@angular/core';
import InfoItem from '../../shared/models/info-item';

@Component({
  selector: 'app-browse-list',
  templateUrl: './browse-list.component.html',
  styleUrls: ['./browse-list.component.scss'],
})
export class BrowseListComponent implements OnInit {
  public items = [
    new InfoItem({
      title: 'Hello World',
      description: 'This is a description',
    }),
    new InfoItem({
      title: 'Hello World 2',
      description: 'This is a description',
    }),
  ];
  constructor() {}
  ngOnInit() {}
}
