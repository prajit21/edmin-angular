import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-differnt-tag-accordion',
  imports: [CommonModule],
  templateUrl: './differnt-tag-accordion.html',
  styleUrl: './differnt-tag-accordion.scss',
})
export class DifferntTagAccordion {
  public togglecollpese = false;

  toggle() {
    this.togglecollpese = !this.togglecollpese;
  }

  open() {
    this.togglecollpese = !this.togglecollpese;
  }
}
