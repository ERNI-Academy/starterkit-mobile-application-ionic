import { Component, EventEmitter, Input, Output } from '@angular/core';
import InfoItem from '../../shared/models/info-item';

@Component({
  selector: 'app-browse-list',
  templateUrl: './browse-list.component.html',
  styleUrls: ['./browse-list.component.scss'],
})
export class BrowseListComponent {
  @Input() public items: InfoItem[] = [];
  @Output() public removeItemEvent = new EventEmitter<string>();

  constructor() {}

  public async onRemoveItem(id: string): Promise<void> {
    this.removeItemEvent.emit(id);
  }
}
