import { Component, OnInit } from '@angular/core';
import InfoItem from '../shared/models/info-item';
import { InfoItemService } from '../shared/services/info-item-service/info-item.service';

@Component({
  selector: 'app-browse',
  templateUrl: 'browse.page.html',
  styleUrls: ['browse.page.scss'],
})
export class BrowsePage implements OnInit {
  public list: InfoItem[] = [];
  constructor(private infoItemService: InfoItemService) {}

  ngOnInit(): void {
    this.getAndSetInfoItems();
  }

  public async onAddItemModalDismiss({
    detail: { data },
  }: CustomEvent<{ data: InfoItem }>): Promise<void> {
    if (data) {
      await this.infoItemService.createInfoItem(data.title, data.description);
      this.getAndSetInfoItems();
    }
  }

  public async onRemoveItem(id: string): Promise<void> {
    this.list = await this.infoItemService.removeInfoItem(id);
  }

  private async getAndSetInfoItems(): Promise<void> {
    this.list = await this.infoItemService.getAllInfoItems();
  }
}
