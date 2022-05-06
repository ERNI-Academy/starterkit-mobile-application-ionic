import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import InfoItem from '../../../shared/models/info-item';

@Component({
  selector: 'app-browse-list-item',
  templateUrl: './browse-list-item.component.html',
  styleUrls: ['./browse-list-item.component.scss'],
})
export class BrowseListItemComponent implements OnInit {
  @Input() public item: InfoItem;
  @Output() public removeItemEvent = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  public removeItem(id: string): void {
    this.removeItemEvent.emit(id);
  }
}
