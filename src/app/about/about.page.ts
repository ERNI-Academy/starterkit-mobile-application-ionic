import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutPage {
  constructor() {}
}
