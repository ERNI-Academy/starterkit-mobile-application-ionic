import { Component, OnInit } from '@angular/core';
import InfoItem from '../../shared/models/info-item';
import { InfoItemService } from '../../shared/services/info-item-service/info-item.service';

@Component({
  selector: 'app-browse-list',
  templateUrl: './browse-list.component.html',
  styleUrls: ['./browse-list.component.scss'],
})
export class BrowseListComponent implements OnInit {
  public items: InfoItem[] = [];

  constructor(private infoItemService: InfoItemService) {}

  ngOnInit() {
    this.setInitialInfoItems();
  }

  private async setInitialInfoItems(): Promise<void> {
    this.items = await this.infoItemService.getAllInfoItems();
  }
}
