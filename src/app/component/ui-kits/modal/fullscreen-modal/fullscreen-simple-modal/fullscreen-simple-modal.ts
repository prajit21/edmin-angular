import { CommonModule } from '@angular/common';
import { Component, inject, TemplateRef } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ModalData } from '../../../../../shared/data/ui-kits/modal';

@Component({
  selector: 'app-fullscreen-simple-modal',
  imports: [CommonModule],
  templateUrl: './fullscreen-simple-modal.html',
  styleUrl: './fullscreen-simple-modal.scss',
})
export class FullscreenSimpleModal {
  public FullscreenData = ModalData;
  private modalService = inject(NgbModal);

  FullscreenbelowModal(FullscreenbelowContent: TemplateRef<NgbModal>) {
    this.modalService.open(FullscreenbelowContent, { fullscreen: true });
  }
}
