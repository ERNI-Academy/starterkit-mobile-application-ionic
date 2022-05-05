import { Component } from '@angular/core';

@Component({
  selector: 'app-browse',
  templateUrl: 'browse.page.html',
  styleUrls: ['browse.page.scss'],
})
export class BrowsePage {
  public isAddItemModalOpen = false;
  constructor() {}

  public showAddModal(): void {
    this.isAddItemModalOpen = true;
  }
}
