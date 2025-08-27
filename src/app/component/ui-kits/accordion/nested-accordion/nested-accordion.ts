import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nested-accordion',
  imports: [CommonModule, NgbModule],
  templateUrl: './nested-accordion.html',
  styleUrl: './nested-accordion.scss',
})
export class NestedAccordion {
  public show: boolean = false;

  open() {
    this.show = !this.show;
  }
}
