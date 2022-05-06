import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import InfoItem from '../../shared/models/info-item';
import { InfoItemService } from '../../shared/services/info-item-service/info-item.service';

@Component({
  selector: 'app-browse-list',
  templateUrl: './browse-list.component.html',
  styleUrls: ['./browse-list.component.scss'],
})
export class BrowseListComponent implements OnInit {
  @Input() public items: InfoItem[] = [];
  @Output() public removeItemEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  public async onRemoveItem(id: string): Promise<void> {
    this.removeItemEvent.emit(id);
  }
}
