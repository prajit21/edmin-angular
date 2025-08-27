import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-border-tabs',
  imports: [CommonModule, NgbModule, FormsModule],
  templateUrl: './border-tabs.html',
  styleUrl: './border-tabs.scss',
})
export class BorderTabs {
  public active = 2;
}
