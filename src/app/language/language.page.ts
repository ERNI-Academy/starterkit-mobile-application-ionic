import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-language',
  templateUrl: 'language.page.html',
  styleUrls: ['language.page.scss'],
})
export class LanguagePage implements OnInit {
  public activeLang = 'en';
  constructor(private translocoService: TranslocoService) {}
  ngOnInit(): void {
    this.activeLang = this.translocoService.getActiveLang();
  }

  public onSelectValueChange({ detail }: CustomEvent<{ value: string }>): void {
    this.translocoService.setActiveLang(detail.value);
  }
}
