import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-browse-add-item-modal',
  templateUrl: './browse-add-item-modal.component.html',
  styleUrls: ['./browse-add-item-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrowseAddItemModalComponent implements OnInit, OnDestroy {
  public form: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', []),
  });

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(
    private modalController: ModalController,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  ngOnInit() {
    this.form.valueChanges
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => this.changeDetector.detectChanges());
  }

  public addItem(): void {
    this.modalController.dismiss(this.form.value);
  }

  public closeModal(): void {
    this.modalController.dismiss();
  }
}
