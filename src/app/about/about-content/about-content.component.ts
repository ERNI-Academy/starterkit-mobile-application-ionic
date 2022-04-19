import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-content',
  templateUrl: './about-content.component.html',
  styleUrls: ['./about-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutContentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
